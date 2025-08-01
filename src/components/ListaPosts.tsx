import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";

type ListaPostProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostProps) {
  return (
    <div className={estilos.posts}>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.titulo}</h3>
          <p>{post.subtitulo}</p>
        </article>
      ))}
    </div>
  );
}
