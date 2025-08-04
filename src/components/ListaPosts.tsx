import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";

type ListaPostProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostProps) {
  return (
    <div className={estilos.posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <h3>{titulo}</h3>
            <p>{subtitulo}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
