import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;
  console.log(id);

  /* DESAFIO ! Faça um novo fetch na API usando este ID e mostre no HTML abaixo os dados obtidos! */
  const resposta = await fetch(`http://localhost:2112/posts/${id}`);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar post" + resposta.statusText);
  }

  const dados = await resposta.json();
  const { titulo, categoria, descricao } = dados;

  return (
    <article className={estilos.conteudo}>
      <h2>{titulo}</h2>
      <Container>
        <h3>{categoria}</h3>
        <p>{descricao}</p>
      </Container>
    </article>
  );
}
