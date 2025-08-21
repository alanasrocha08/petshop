"use client";

import { useState } from "react";
import estilos from "./Formulario.module.css";
import { enviarContato } from "@/lib/enviar-contato";
import { useFormStatus } from "react-dom";

function BotaoEnviar() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Processando..," : "Enviar"}
    </button>
  );
}

export default function Formulario() {
  // Estados para os textos da mensagem
  const [mensagem, setMensagem] = useState("");

  // Estador para o tipo de mensagem: sucesso ou erro
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

  async function processarDados(dadosForm: FormData) {
    //Reset dos states voltando ao valor padrão
    setMensagem("");
    setTipoMensagem("");

    try {
      await enviarContato(dadosForm);
      setMensagem("Mensagem enviado cim sucesso!");
      setTipoMensagem("sucesso");

      // Reseta os campos do formulário
      dadosForm.set("nome", "");
      dadosForm.set("email", "");
      dadosForm.set("mensagem", "");
    } catch (error: unknown) {
      setMensagem(error instanceof Error ? error.message : "Erro ao enviar");
      setTipoMensagem("erro");
    }
  }

  return (
    <form action={processarDados} className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="">E-mail</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Escreva seu nome"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="">Nome</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Informe um e-mail válido"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="Escreva uma mensagem aqui"
        ></textarea>
      </div>
      <div className={estilos.campo}>
        <BotaoEnviar />
      </div>
    </form>
  );
}
