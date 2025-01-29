import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string().required("İsim alanı zorunludur"),
  email: Yup.string().email("Lütfen geçerli bir e-posta adresi girin").required("E-posta alanı zorunludur"),
  message: Yup.string().required("Mesaj alanı zorunludur"),
});
