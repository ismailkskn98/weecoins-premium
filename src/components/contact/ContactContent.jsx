import React from "react";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <article className="flex h-full w-full flex-1 flex-col items-start gap-y-6 md:w-10/12 lg:w-full lg:p-6 xl:p-10">
      <div className="flex w-full flex-col items-start gap-2">
        <h3 className="text-xl font-semibold md:text-2xl">Bağlantılarımızı Güçlendirelim</h3>
        <p className="text-sm text-zinc-600 md:text-base">
          Sorularınızı yanıtlamaktan ve iş birliği fırsatlarını değerlendirmekten memnuniyet duyarız.{" "}
        </p>
      </div>
      <ContactForm />
    </article>
  );
}
