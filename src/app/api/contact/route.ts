import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT;
const API_SECRET_TOKEN = process.env.API_SECRET_TOKEN;

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, clientToken } = await req.json();

    // 1. Validação de segurança
    if (!API_SECRET_TOKEN || clientToken !== API_SECRET_TOKEN) {
      console.warn('Unauthorized access attempt to contact API');
      return NextResponse.json({ message: 'Unauthorized access' }, { status: 401 });
    }

    // 2. Validação dos dados
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    // 3. Validação das variáveis de ambiente
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !EMAIL_RECIPIENT) {
      console.error('Missing Gmail configuration in environment variables');
      return NextResponse.json({ message: 'Erro de configuração do servidor' }, { status: 500 });
    }

    // 4. Configurar transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD, // Senha de app de 16 caracteres
      },
    });

    // 5. Configurar o e-mail
    const mailOptions = {
      from: GMAIL_USER, // Seu Gmail
      to: EMAIL_RECIPIENT, // Para onde enviar
      //replyTo: email, // E-mail do usuário que preencheu o formulário
      subject: `[Contato Site] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #39a190; padding-bottom: 10px;">
            Nova mensagem do site
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Assunto:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #39a190; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #888; font-size: 12px; text-align: center;">
            Mensagem enviada através do formulário de contato do site naysinger.tech
          </p>
        </div>
      `,
      text: `
Nome: ${name}
E-mail: ${email}
Assunto: ${subject}

Mensagem:
${message}

---
Mensagem enviada através do formulário de contato do site
      `,
    };

    // 6. Enviar o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'E-mail enviado com sucesso!' 
    }, { status: 200 });

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    
    // Log mais detalhado para debug
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    
    return NextResponse.json({ 
      message: 'Falha ao enviar e-mail. Tente novamente mais tarde.' 
    }, { status: 500 });
  }
} 