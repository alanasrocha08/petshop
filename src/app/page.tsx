import { Metadata } from "next";
import estilos from "./page.module.css";
import ListaPosts from "@/components/ListaPosts";
import arrayPosts from "@/data/array-post";

export default function Home() {
  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Aqui você encontra as últimas notícias sobre Pets.</p>
      <ListaPosts posts={arrayPosts} />
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
