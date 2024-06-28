import * as brevo from '@getbrevo/brevo';
import { redirect } from 'next/navigation';

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

interface Params {
  subject: string;
  to: { email: string; name: string }[];
  htmlContent: string;
}

export async function sendEmail({ subject, to, htmlContent }: Params) {
  try {
    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = subject;
    smtpEmail.to = to;
    smtpEmail.htmlContent = `<html><body>${htmlContent}</body></html>`;
    smtpEmail.sender = {
      name: 'CloudVision',
      email: 'franz.medrano@icloud.com',
    };

    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.log(error);
  }

  redirect('/success');
}
