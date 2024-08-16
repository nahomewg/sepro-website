import QuizEmail from '@/app/emails/QuizEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();
    const record = JSON.parse(body);
    try {
    const { data, error } = await resend.emails.send({
        from: 'SE PRO-GRAM <no-reply@woldecode.ca>',
        to: [record['Email']],
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

