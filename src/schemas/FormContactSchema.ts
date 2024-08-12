import { z } from "zod";


export const FormContactSchema = z.object({
  name: z.string().min(1, { message: "O campo nome é obrigatório"}),
  email: z.string().min(1, { message: "O campo email é obrigatório"}).email("Digite um e-mail válido"),
  phonenumber: z.string(),
  about: z.string().min(1, { message: "O campo assunto é obrigatório"}),
  message: z.string().min(1, { message: "O campo mensagem é obrigatório"}),
})