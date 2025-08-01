import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";

/* Configurando um tipo para este componente e, neste tipo, definimos a prop posts relacionando ela ao tipo Post criado anteriormente. */
type ListaPostProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostProps) {
  return (
    <div className={estilos.posts}>
      <article>
        <h3>Título do post</h3>
        <p>Subtítulo do post...</p>
      </article>
    </div>
  );
}
