import mail from '@sendgrid/mail';

export default (req, res) => {
  if (req.method !== 'POST') return

  const { name, email, phone, message } = req.body

  mail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const emailMessage = {
    to: 'jacobmeredith@hotmail.co.uk',
    from: 'jake@jwm.digital',
    subject: 'Website contact form',
    text: 'and easy to do anywhere, even with Node.js',
    html: `
      <table style="border: 1px solid #ddd; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Label</th>
            <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Name</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Email</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${email}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Phone</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${phone}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Message</td>
            <td style="border: 1px solid #ddd; padding: 10px;">${message}</td>
          </tr>
      </table>
    `,
  };

  mail
    .send(emailMessage)
    .then(() => {
      res.statusCode = 200;
    })
    .catch(error => {
      console.error(error);
      res.statusCode = 500;
    })
    .then(() => {
      res.end();
    });
}
