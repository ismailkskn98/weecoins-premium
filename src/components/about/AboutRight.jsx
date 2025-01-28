import React from "react";
import LearnMore from "../common/LearnMore";

export default function AboutRight() {
  return (
    <article className="flex flex-1 flex-col items-start gap-8">
      <div className="to-light-f88540 flex flex-col gap-4 rounded-lg bg-gradient-to-br from-light-gradient-f7cf68 p-8 dark:from-light-833E15">
        <h3 className="text-3xl font-bold">Neden WeeCoins Premium?</h3>
        <p className="text-zinc-600 dark:text-zinc-200">
          WeeCoins Premium ekosistemi, yalnızca bir kripto para birimi olmanın ötesinde, anlaşmalı mağazalarda alışveriş yapma, varlık
          transferi ve akıllı sözleşmeler gibi birçok hizmet sunarak geniş bir kullanım alanına sahiptir. Geleceğin finans dünyasında
          yerinizi almak için siz de WeeCoins Premium ailesine katılın!
        </p>
        <LearnMore href={"/contact"} />
      </div>
    </article>
  );
}
