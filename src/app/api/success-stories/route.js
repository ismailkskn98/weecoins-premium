import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET() {
  // Veritabanına bağlan
  // const connection = await mysql.createConnection({
  //   host: "localhost", // Veritabanı sunucun
  //   user: "root", // Kullanıcı adın
  //   password: "password", // Şifren
  //   database: "mydatabase", // Veritabanı adın
  // });

  // // SQL Sorgusu ile yorumları al
  // const [rows] = await connection.execute("SELECT 1;");

  // return NextResponse.json(rows); // JSON formatında verileri döndür
  let obj = [
    {
      id: 1,
      image: "https://128518418148.jpg",
      country_flag: "TR",
      user_name: "İsmail",
      created_at: "2025-01-28 16:30:25.125412",
      content: "weecoins premium kriptovalyutanı almağı mənə dosdum tövsiyə etdi baxdım gördüm cox böyük projelərə",
      contact_type: "INSTAGRAM",
      contact_value: "cr7",
    },
  ];

  return NextResponse.json(obj);
}
