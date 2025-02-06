"use client";
import React from "react";
import dynamic from "next/dynamic";
import card1 from "@/../public/images/card-1.json";
import card2 from "@/../public/images/card-2.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function CardImage({ cardNumber }) {
  return (
    <div className="float-left mb-2 mr-3 h-[112px] w-[150px] overflow-hidden rounded-lg">
      <Lottie
        animationData={cardNumber === 1 ? card1 : card2}
        className="min-h-full min-w-full scale-105 rounded-lg transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
}
