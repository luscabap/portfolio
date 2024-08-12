import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"
import { FormContactSchema } from "../schemas/FormContactSchema";
import { z } from "zod";
import emailjs from "@emailjs/browser"
import { useState } from "react";

const useFormContact = () => {
  type FormContactProps = z.infer<typeof FormContactSchema>

  const [successSendEmail, setSuccessSendEmail] = useState(false);

  const closeModal = () => {
    setSuccessSendEmail(false)
  }

  const { register, formState: { errors }, handleSubmit, reset } = useForm<FormContactProps>({
    resolver: zodResolver(FormContactSchema)
  });

  const onSubmit: SubmitHandler<FormContactProps> = (e) => {
    const teamplateMessage = {
      from_name: e.name,
      about: e.about,
      message: e.message,
      phonenumber: e.phonenumber,
      email: e.email
    }

    emailjs.send(
      "service_z6n4ymq",
      "template_pbys7ld",
      teamplateMessage,
      "96zS6kOjqprudpstJ"
    ).then(
      success => console.log("E-mail enviado com sucesso!", success),
      error => console.log("Ooops, aconteceu um erro", error)
    )

    setSuccessSendEmail(true);

    setTimeout(() => {
      setSuccessSendEmail(false)
    }, 5000);

    reset({
      about: "",
      email: "",
      message: "",
      name: "",
      phonenumber: ""
    })
  }

  return {
    register, errors, handleSubmit, onSubmit, successSendEmail, closeModal
  }
}

export default useFormContact;