import { useEffect, useState } from "react";
import Post from "./Post";

function PostList() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Yamisaki",
      content:
        "Serverpod Mini is a lightweight version of Serverpod that is perfect for small projects or when you want to try out Serverpod without setting up a Postgres database. If you start with Mini, you can upgrade to the full version of Serverpod anytime.",
      author: "Yamizaki 100% real no fake",
      category: 1,
      image:
        "http://af0d-179-49-64-42.ngrok-free.app/media/post_images/6132d19a2c9f0e346a45e2bd83f3e748_Lcp6dYJ.jpg",
      created_at: "2024-11-20T20:51:36.889971Z",
      updated_at: "2024-11-20T20:51:36.889996Z",
    },
    {
      id: 2,
      title: "uk3regfkew",
      content: "ewrfwerf",
      author: "ewrfwerfew",
      category: 1,
      image:
        "http://af0d-179-49-64-42.ngrok-free.app/media/post_images/6132d19a2c9f0e346a45e2bd83f3e748_lPHQ1CB.jpg",
      created_at: "2024-11-20T21:03:38.976267Z",
      updated_at: "2024-11-20T21:03:38.976293Z",
    },
    {
      id: 3,
      title: "uk3regfkew",
      content: "ewrfwerf",
      author: "ewrfwerfew",
      category: 1,
      image: null,
      created_at: "2024-11-20T21:03:41.717548Z",
      updated_at: "2024-11-20T21:03:41.717565Z",
    },
    {
      id: 4,
      title: "YAMIZAKI",
      content:
        "Yamizaki, un programador introvertido, pasaba sus días rodeado de código, pero siempre que cruzaba la recepción, no podía evitar fijarse en Silvia, la recepcionista. Su presencia era imponente, y algo en su forma de caminar lo mantenía distraído. Había algo en ella que lo cautivaba, más allá de su sonrisa brillante, algo que no podía identificar pero lo atrapaba cada vez que la veía.\r\n\r\nUn día, Silvia se acercó a su escritorio. “Yamizaki, ¿me ayudas con un problema en mi computadora?”\r\n\r\nCon nerviosismo, él la condujo a su estación de trabajo. Mientras solucionaban el problema, sus manos se rozaron, y el aire se volvió denso. Silvia lo miró, agradecida. “Eres increíble con la tecnología,” dijo, sonriendo.\r\n\r\nAprovechando el momento, Yamizaki, algo torpe, murmuró: “¿Te gustaría tomar un café después del trabajo?”\r\n\r\nElla, con una sonrisa traviesa, respondió: “Claro, me encantaría.”\r\n\r\nDesde ese día, sus encuentros se hicieron más frecuentes. Las conversaciones se alargaban, y la atracción crecía. Un día, mientras caminaban juntos después del trabajo, él tomó su mano. “Siempre supe que algo entre nosotros funcionaría,” dijo.\r\n\r\nSilvia, con una mirada cómplice, le respondió: “Yo también.”\r\n\r\nY así, entre risas y miradas cómplices, ambos supieron que lo que había comenzado entre algoritmos y pantallas de computadora era solo el principio de algo mucho más grande.",
      author: "Gino",
      category: 1,
      image:
        "http://af0d-179-49-64-42.ngrok-free.app/media/post_images/6132d19a2c9f0e346a45e2bd83f3e748_YU6txla.jpg",
      created_at: "2024-11-20T22:49:32.673016Z",
      updated_at: "2024-11-20T22:49:32.673097Z",
    },
  ]);
  const [loading, setLoading] = useState(true); // Estado para el spinner o indicador de carga
  const [error, setError] = useState(null); // Est

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-10"> Eventos anteriores</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {blogs.map((blog) => (
          <Post
            key={blog.id}
            blogTitle={blog.title}
            blogContent={blog.content}
            blogAuthor={blog.author}
            blogCategory={blog.category}
            blogCreated={blog.created_at}
          />
        ))}
      </div>
    </>
  );
}

export default PostList;
