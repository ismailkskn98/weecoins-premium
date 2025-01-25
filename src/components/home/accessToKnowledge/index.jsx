import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import React from "react";

export default function AccessToKnowledge() {
  const cardItems = [
    {
      title: "Bilginin Gücünü Keşfedin",
      description:
        "WeeCoins Premium ile sınırsız öğrenme olanaklarına erişin. İster bir konuda uzmanlaşın, ister yeni bir hobi edinin, WCP’nin sunduğu platformda aradığınız içeriği bulabilirsiniz.",
      image: "/images/access-card-1.png",
    },
    {
      title: "Neden WeeCoins Premium ile Eğitim?",
      description:
        "WCP kullanarak yapılan ödemeler, eğitim alanında gerçekleştirilen her işlemle birlikte değer kazanır. Her yeni ders, her yeni katılımcı, WCP’nin değerini artırarak ekosistemi genişletir.",
      image: "/images/access-card-2.png",
    },
  ];

  return (
    <section className="mt-[92px] flex w-full flex-col items-center justify-center gap-[60px]">
      <SectionTitle
        title="Bilgiye Sınırsız Erişim"
        description="Çevrimiçi eğitim, erişilebilirliği ve esnekliği nedeniyle dünya çapında giderek daha fazla tercih edilen bir öğrenme yöntemi haline geldi. Bu platform herkese her konuda, her yerde, her zaman kaliteli eğitim alma fırsatını sunuyor."
      />
      <article className="mx-auto flex flex-col items-center gap-6 lg:flex-row">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="flex h-full w-full max-w-[520px] flex-col items-center justify-center rounded-2xl border border-solid border-[#1B1B1B]/10 px-10 py-10 shadow-lg"
          >
            <Image
              src={item.image}
              width={330}
              height={330}
              alt="weecoins access to knowledge image"
              className="h-full max-h-[330px] w-full max-w-[330px] object-cover drop-shadow-lg"
            />
            <div className="flex flex-col items-center justify-center bg-gradient-to-t from-light-833E15 to-black bg-clip-text text-center text-transparent">
              <h4 className="text-nowrap font-dmSans text-2xl font-bold leading-[60px]">{item.title}</h4>
              <p className="font-inter text-base font-light leading-[23px]">{item.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
