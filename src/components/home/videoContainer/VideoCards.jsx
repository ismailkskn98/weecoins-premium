import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { FaChartLine } from "react-icons/fa";

export default function VideoCards() {
  const cards = [
    {
      title: "Akıllı Sözleşmeler",
      description: "Solidity dili kullanılarak geliştirilen akıllı sözleşme teknolojisi ile işlemleriniz güvenli ve garantilidir.",
      icon: FaRegHandshake,
    },
    {
      title: "Otomatik Likidite Havuzu",
      description: "Likidite havuzlarını otomatik olarak oluşturma ve yönetme özelliği ile işlem kolaylığı sağlar.",
      icon: AiOutlineRobot,
    },
    {
      title: "Verim Tarımı Staking",
      description: "Kullanıcılara tokenlarını stake ederek veya likidite sağlayarak ödül kazanma fırsatı sunar.",
      icon: TfiCup,
    },
    {
      title: "Hemen Katılın",
      description: "WeeCoins Premium'un eğitim platformuna bugün katılın ve yenilikçi bir öğrenme deneyiminin parçası olun. ",
      icon: FaChartLine,
    },
  ];

  return (
    <article className="flex w-full items-start justify-between gap-5">
      {cards.map((card, index) => (
        <div key={index} className="item-start flex max-w-64 flex-col gap-[10px] py-10 text-black">
          <card.icon className="h-5 w-5" />
          <h4 className="font-dmSans text-lg font-bold">{card.title}</h4>
          <p className="font-inter text-base leading-6">{card.description}</p>
        </div>
      ))}
    </article>
  );
}
