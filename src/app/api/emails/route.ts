// import Email from '@/app/emails/Email';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//     await resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: 'nahome@woldecode.ca',
//         subject: 'hello world',
//         react: Email(),
//     });
// }
import Email from '@/app/emails/Email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { email, body } = await request.json();
    try {
    const { data, error } = await resend.emails.send({
        from: 'SE PRO-GRAM <no-reply@woldecode.ca>',
        to: [email],
        subject: 'Hello world',
        react: Email({ body }),
    });

    if (error) {
        return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
    } catch (error) {
    return Response.json({ error }, { status: 500 });
    }
}

