import { Metadata } from "next";
import estilos from "./page.module.css";

export default function Home() {
  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>
        Fique por dentro das últimas novidades do mundo pet! Dicas de cuidados,
        informações sobre saúde, alimentação e comportamento dos seus animais de
        estimação, além de notícias sobre eventos e lançamentos exclusivos para
        garantir o bem-estar e a felicidade do seu melhor amigo. Aqui, você
        encontra tudo para cuidar com amor e responsabilidade do seu companheiro
        de quatro patas.
      </p>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Notícias | PetShop",
  description:
    "Confira novidades, dicas de saúde, alimentação e eventos do mundo pet. Fique informado para garantir o bem-estar e felicidade do seu animal de estimação",
  keywords: ["petshop", "animais", "cachorros", "gatos"],
  authors: [
    {
      name: "Alana",
      url: "https://github.com/alanasrocha",
    },
  ],
};
