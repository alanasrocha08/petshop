import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";
import { Post } from "@/types/Post";

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

/* A função abaixo precisa: 
- Receber o id 
- Executar o acesso à API usando este id(como string) e retornar o post com os dados
- O retorno da função DEVE SER um Promise
- Não se esqueça de chamar/usar esta nova função dentro do genare=ateMetadata e do DetalhePost no lugar do código que você irá remover. */
async function buscarPostPorId(id: string): Promise<Post> {
  const resposta = await fetch(`http://localhost:2112/posts/${id}`);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();
  return post;
}

export async function genereteMetadata({ params }: DetalhePostProps) {
  const { id } = await params;

  const resposta = await fetch(`http://localhost:2112/posts/${id}`);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar post" + resposta.statusText);
  }

  const dados = await resposta.json();

  return {
    title: dados.titulo + "| PetShop",
    description: dados.descricao,
  };
}

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;
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
