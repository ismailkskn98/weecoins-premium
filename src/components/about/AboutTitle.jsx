import React from "react";

export default function AboutTitle() {
  return (
    <article className="flex w-full flex-col gap-y-6">
      <div className="relative">
        <h2 className="from-light-f88540 dark:to-light-f88540 mb-6 bg-gradient-to-t to-light-gradient-f7cf68 bg-clip-text text-center font-dmSans text-4xl font-bold text-transparent md:text-6xl">
          WEECOINS Premium Teknolojisi
        </h2>
      </div>
      <p className="mx-auto w-full text-center text-lg text-zinc-600 dark:text-zinc-300 md:text-xl xl:w-10/12">
        WeeCoins Premium, blockchain teknolojisini kullanarak finansal özgürlüğü ve ekonomik katılımı genişletmeyi hedefleyen yenilikçi bir
        kripto ekosistemidir. Güvenli, hızlı ve düşük maliyetli işlem yapabilmeyi sağlayan WeeGold ağı üzerine inşa edilen sistemimiz,
        kullanıcılarımıza benzersiz bir dijital varlık deneyimi sunmaktadır.
      </p>
    </article>
  );
}
