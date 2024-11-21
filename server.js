import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Foto de teste do gato",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Foto de teste do gato preto",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Foto de teste do gato branco",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
