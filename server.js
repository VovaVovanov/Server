const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // Папка для статических файлов, например HTML

const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  service: 'gmail',
  auth: {
    user: 'vovanovv313@gmail.com',
    pass: 'ypku vvrj mnqa rcxi'
  }
});

app.post('/send-email', (req, res) => {
  const { email } = req.body;
  const mailOptions = {
    from: 'vovanovv313@gmail.com',
    to: email,
    subject: 'Привет от моего сайта',
    html: '<h1 style="text-align:center; color:green;">Hello!</h1> <p style="text-align:center;" >Привет</p> <br><div style="text-align: center;"><a href="https://hfeplq.mimo.run" style="display: inline-block; color:green;">my site</a></div>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send('Ошибка при отправке сообщения: ' + error.message);
    } else {
      res.send('Сообщение успешно отправлено');
    }
  });
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
