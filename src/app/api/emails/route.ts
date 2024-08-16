import QuizEmail from '@/app/emails/QuizEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();
    try {
    const { data, error } = await resend.emails.send({
        from: 'SE PRO-GRAM <no-reply@woldecode.ca>',
        to: ['nwgiorgis@gmail.com'],
        subject: 'SE PRO-GRAM - New Client!',
        react: QuizEmail({ body }),
    });

    if (error) {
        return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
    } catch (error) {
    return Response.json({ error }, { status: 500 });
    }
}

