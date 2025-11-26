import EmailTemplate from "@/components/layout/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { name, phoneNumber, service, message } = body;

    const { data, error } = await resend.emails.send({
      from: "noreply@shironstudio.com",
      to: "shironstudio@proton.me",
      subject: `Pesan Baru dari ${name} — ${service}`,
      react: EmailTemplate({ name, phoneNumber, service, message }),
    });

    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Unexpected error:", error);

    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
};

export { POST };
