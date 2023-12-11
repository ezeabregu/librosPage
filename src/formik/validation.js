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
