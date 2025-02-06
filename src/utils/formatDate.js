export function formatDate(date) {
  const tarih = new Date(date);

  const gun = String(tarih.getDate()).padStart(2, "0");
  const ay = String(tarih.getMonth() + 1).padStart(2, "0"); // Aylar 0'dan başlıyor, +1 ekledik.
  const yil = tarih.getFullYear();

  const saat = String(tarih.getHours()).padStart(2, "0");
  const dakika = String(tarih.getMinutes()).padStart(2, "0");

  return `${gun}/${ay}/${yil} ${saat}:${dakika}`;
}
