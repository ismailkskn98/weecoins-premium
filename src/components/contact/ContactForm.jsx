"use client";
import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("ContactPage");

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, t("form.name.validation.minLength", { min: 3 }))
      .required(t("form.name.validation.required")),
    email: Yup.string().email(t("form.email.validation.email")).required(t("form.email.validation.required")),
    message: Yup.string()
      .min(10, t("form.message.validation.minLength", { min: 10 }))
      .required(t("form.message.validation.required")),
  });
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
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
