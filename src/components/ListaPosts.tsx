import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";

type ListaPostProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostProps) {
  return (
    <div className={estilos.posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <article key={id}>
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
}
