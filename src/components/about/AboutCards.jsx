import React from "react";
import { IoShieldOutline } from "react-icons/io5";
import { LuZap } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import AboutCard from "./AboutCard";

export default function AboutCards() {
  return (
    <article className="mx-auto flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:items-start xl:w-10/12">
      <AboutCard
        title={"Güvenli"}
        description={"Proof-of-Stake konsensüs mekanizmasıyla çalışan WeeGold ağı, maksimum güvenlik sağlar."}
        Icon={IoShieldOutline}
      />
      <AboutCard
        title={"Hızlı"}
        description={"Optimize edilmiş blok zinciri yapımız sayesinde işlemler anında gerçekleşir."}
        Icon={LuZap}
      />
      <AboutCard
        title={"Düşük Maliyetli"}
        description={"Kullanıcılarımızın daha düşük işlem ücretleriyle işlem yapmasını sağlıyoruz."}
        Icon={FiDollarSign}
      />
    </article>
  );
}
