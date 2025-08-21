import { Metadata } from "next";
import estilos from "./contato.module.css";
import Container from "@/components/Container";
import Formulario from "@/components/Formulario";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description:
    "Fale conosco! Tire dúvidas, envie sugestões ou peça informações sobre nossos produtos e serviços. Atendimento rápido para cuidar do seu melhor amigo.",
};

export default function contato() {
  return (
    <section className={estilos.conteudo}>
      <h2>Contato</h2>
      <Container>
        <p>
          Você pode nos enviar um e-mail para{" "}
          <a href="mailto:contato@petshop.com">contato@petshop.com</a> ou nos
          ligar pelo telefone <a href="tel:+5511999999999">+55 11 99999-9999</a>
        </p>

        <p>Se preferir, use o formulário abaixo:</p>
        <Formulario />
      </Container>
    </section>
  );
}
