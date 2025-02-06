import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
// import { data } from "../../../components/home/successStories/data.js";

export async function GET() {
  // Veritabanına bağlan
  const connection = await mysql.createConnection({
    host: "10.6.6.12", // Veritabanı sunucun
    user: "admin_global", // Kullanıcı adın
    password: "9I2MTFwsY099xcML", // Şifren
    database: "weecoins.com", // Veritabanı adın
  });

  // SQL Sorgusu ile yorumları al
  const [rows] = await connection.execute(`
    SELECT * FROM success_stories
    WHERE is_approved = 1
    ORDER BY RAND()
    LIMIT 21;
  `);

  return NextResponse.json(rows); // JSON formatında verileri döndür
  // let obj = [...data];

  return NextResponse.json(obj);
}
