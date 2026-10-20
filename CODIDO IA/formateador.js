import { URL } from "./env.js";
import { solicitar } from "./solicitudes.js";

export async function usuarios(id) {
  // 1. Secuencial: necesitamos el usuario y luego sus posts
  const usuario = await solicitar(`${URL}/users/${id}`);
  const posts = await solicitar(`${URL}/posts?userId=${id}`);

  // 2. Paralelo: un fetch de comentarios por cada post
  const postsConComentarios = await Promise.all(
    posts.map(async (post) => {
      const comentarios = await solicitar(`${URL}/comments?postId=${post.id}`);
      return { post, comentarios };
    })
  );

  // 3. Se devuelve el resultado (sin console.log)
  return {
    usuario: usuario.name,
    posts: postsConComentarios,
  };
}