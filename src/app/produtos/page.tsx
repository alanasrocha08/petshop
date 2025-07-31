import { Metadata } from "next";
import estilos from "./produtos.module.css";

export const metadata: Metadata = {
  title: "Produtos |  PetShop",
  description:
    "Encontre produtos de qualidade para seu pet: rações, brinquedos, acessórios, itens de higiene e muito mais, tudo com segurança para a felicidade do seu companheiro.",
};

export default function produtos() {
  return (
    <section className={estilos.conteudo}>
      <h2>Produtos</h2>
      <p>
        Descubra nossa variedade de produtos cuidadosamente selecionados para
        cuidar do seu pet com qualidade e carinho. Desde alimentação balanceada,
        acessórios confortáveis, até itens de higiene e brinquedos que garantem
        a diversão e o bem-estar do seu melhor amigo. Tudo para você encontrar
        aqui, com facilidade e segurança, o que seu companheiro precisa para ser
        feliz e saudável.
      </p>
    </section>
  );
}
