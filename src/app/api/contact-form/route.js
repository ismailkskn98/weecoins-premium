import { NextResponse, NextRequest } from "next/server";
import mailer from "nodemailer";

const emailRegex = /^(?![.-])[A-Za-z0-9.-]{3,}@[A-Za-z0-9]{2,}\.[A-Za-z]{2,}$/;
const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

export async function POST(req) {
  try {
    const name = req.body.name;
    const message = req.body.message;
    const email = req.body.email;

    if (!name || name.length < 3 || !nameRegex.test(name)) {
      return NextResponse.json({ status: false, message: "Geçerli bir isim giriniz" });
    }
    if (!email || email.length < 3 || !emailRegex.test(email)) {
      return NextResponse.json({ status: false, message: "Geçerli bir e-posta adresi giriniz." });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({ status: false, message: "Mesajınız en az 10 karakter uzunluğunda olmalıdır." });
    }

    let htmlResponse = `
      <p><strong>Adınız:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mesajınız:</strong> ${message}</p>
  `;

    const transporter = mailer.createTransport({
      host: "mailing.weecoins.org",
      port: 465,
      secure: true,
      auth: {
        user: "info@weecoins.org",
        pass: "weecoins2023",
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2",
      },
    });

    const mailOptions = {
      from: "info@weecoins.org",
      to: "info@weecoins.org",
      subject: "WeeCoins Premium - Web Sayfasından Mesaj",
      html: htmlResponse,
    };

    let mailResult = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Mesajınız başarıyla gönderildi!",
    });
  } catch (error) {
    console.error("E-posta gönderilirken hata oluştu:", error);
    return NextResponse.json({
      status: false,
      message: "Bir hata oluştu, lütfen tekrar deneyiniz.",
    });
  }
}
