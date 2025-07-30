import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description:
    "Conheça nosso petshop: apaixonados por animais, oferecemos atendimento especial, produtos selecionados e informações confiáveis para o cuidado do seu pet.",
};

export default function sobre() {
  return (
    <section>
      <h2>Sobre</h2>
      <p>
        Somos apaixonados por animais e acreditamos que todo pet merece amor,
        cuidado e atenção de qualidade. Nosso petshop nasceu do desejo de
        oferecer um atendimento especial, produtos selecionados e informações
        confiáveis para garantir o bem-estar dos seus melhores amigos. Nossa
        equipe está sempre pronta para ajudar e orientar você em cada etapa do
        cuidado com seu companheiro, com dedicação, respeito e carinho. Aqui,
        seu pet é parte da nossa família!
      </p>
    </section>
  );
}
