import React from "react";

export default function AboutLeft() {
  return (
    <article className="relative flex h-full flex-1 flex-col items-start gap-12">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">Misyonumuz</h3>
        <p className="text-zinc-600 dark:text-zinc-300">
          Kripto varlıklarla işlem yapmayı kolaylaştırarak, bireylerin ve işletmelerin finansal sistemlere erişimini artırmak ve daha adil
          bir ekonomi oluşturmaktır.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">Vizyonumuz</h3>
        <p className="text-zinc-600 dark:text-zinc-300">
          Blockchain teknolojisini herkes için erişilebilir hale getirerek, global çapta yaygın olarak kullanılan bir dijital ödeme ve
          yatırım aracı olmak.
        </p>
      </div>
    </article>
  );
}
