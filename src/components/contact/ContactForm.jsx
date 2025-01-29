"use client";
import React from "react";
import { Formik, Form } from "formik";
import { contactSchema } from "./validationSchema";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import { toast } from "sonner";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const handleSubmit = (values, actions) => {
    try {
      console.log(values);
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
          <CustomInput name="name" type="text" id="name" label="Adınız" />
          <CustomInput name="email" label="E-posta Adresiniz" type="email" id="email" />
          <CustomTextarea name="message" label="Mesajınız" id="message" />
          <button
            className="bg-light-ffc107 w-full rounded-sm px-3 py-3 text-sm font-semibold text-dark-0d0d0d transition-colors duration-200 hover:bg-[#dda705]"
            disabled={isSubmitting}
            type="submit"
          >
            Mesajınızı Gönderin
          </button>
        </Form>
      )}
    </Formik>
  );
}
