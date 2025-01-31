"use client";
import React from "react";
import { Formik, Form } from "formik";
import { contactSchema } from "./validationSchema";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("ContactPage");
  const handleSubmit = async (values, actions) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: values,
      });

      if (!response.ok) {
        throw new Error("Form gönderirken hata oluştu");
      }
      actions.resetForm();
      toast.success("Mesajınız iletilmiştir. Teşekkürler!");
    } catch (error) {
      console.log(error);
      toast.error("Bir hata oluştu.");
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
      {({ isSubmitting }) => (
        <Form className="flex w-full flex-col gap-y-7 md:gap-y-9">
          <CustomInput name="name" type="text" id="name" label={t("form.name.label")} />
          <CustomInput name="email" label={t("form.email.label")} type="email" id="email" />
          <CustomTextarea name="message" label={t("form.message.label")} id="message" />
          <button
            className="w-full rounded-sm bg-light-ffc107 px-3 py-3 text-sm font-semibold text-dark-0d0d0d transition-colors duration-200 hover:bg-[#dda705]"
            disabled={isSubmitting}
            type="submit"
          >
            {t("form.button")}
          </button>
        </Form>
      )}
    </Formik>
  );
}
