import ContactEmail from '@/app/emails/ContactEmail';
import QuizEmail from '@/app/emails/QuizEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { emailType, body } = await request.json();

    let emailTemplate;
    switch (emailType) {
        case 'quiz':
            emailTemplate = QuizEmail({ body });
            break;
        case 'contact':
            emailTemplate = ContactEmail({ body });
            break
        default:
            return Response.json({ error: 'Invalid email type' }, { status: 400 });
    }

    let subject = emailType === 'quiz' ? 'SE PRO-GRAM - New Quiz Submission!' : 'SE PRO-GRAM - New Client!';

    try {
    const { data, error } = await resend.emails.send({
        from: 'SE PRO-GRAM <no-reply@seprogram.ca>',
        to: ['sebelimbi@gmail.com'],
        subject: subject,
        react: emailTemplate,
    });

    if (error) {
        return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
    } catch (error) {
    return Response.json({ error }, { status: 500 });
    }
}

