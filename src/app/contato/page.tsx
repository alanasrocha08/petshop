import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description:
    "Fale conosco! Tire dúvidas, envie sugestões ou peça informações sobre nossos produtos e serviços. Atendimento rápido para cuidar do seu melhor amigo.",
};

export default function contato() {
  return (
    <section>
      <h2>Contato</h2>
      <p>
        Entre em contato conosco! Seja para tirar dúvidas, receber orientações,
        fazer sugestões ou pedir informações sobre nossos produtos e serviços,
        estamos prontos para ajudar você e seu pet. Preencha o formulário ou
        utilize um dos nossos canais de atendimento. Sua mensagem é muito
        importante para nós, e responderemos o mais breve possível para garantir
        o melhor para o seu companheiro de quatro patas.
      </p>
    </section>
  );
}
