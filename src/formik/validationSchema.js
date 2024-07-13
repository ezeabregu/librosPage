import * as Yup from "yup";

export const validation = Yup.object({
  nombre: Yup.string()
    .trim()
    .max(10, "Máximo 10 caracteres")
    .required("Campo requerido"),
  apellido: Yup.string()
    .trim()
    .max(10, "Máximo 10 caracteres")
    .required("Campo requerido"),
  email: Yup.string()
    .email("Ingresa un correo electronico válido")
    .required("Campo requerido"),
  asunto: Yup.string().trim().required("Campo requerido"),
});

export const validationLogin = Yup.object({
  email: Yup.string()
    .email("Ingresa un correo electronico válido")
    .required("Campo requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Campo requerido"),
});

export const validationSignUp = Yup.object({
  name: Yup.string()
    .trim()
    .max(20, "Máximo 20 caracteres")
    .required("Campo requerido"),
  email: Yup.string()
    .email("Ingresa un correo electronico válido")
    .required("Campo requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Campo requerido"),
});

export const validationVerify = Yup.object({
  code: Yup.string()
    .trim()
    .max(6, "Máximo 6 caracteres")
    .required("Campo requerido"),
});
