import { Metadata } from "next";
import estilos from "./not-found.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | PetShop",
  robots: "noindex",
};

export default function Pagina404() {
  return (
    <section className={estilos.conteudo}>
      <h2>Ops! Página não encontrada!</h2>
      <div className={estilos.imagem404}>
        <img
          src="./images/404.svg"
          alt="Cchorrimho com cara de triste e nariz vermelho com o simbolo de interogação da mesma cor ao seu lado"
        />
        <p>
          <Link href="/">Voltar para a página incial</Link>
        </p>
      </div>
    </section>
  );
}
