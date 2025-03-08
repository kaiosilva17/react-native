let livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R Tolkien",
  ano: 1954,
};

let { titulo, autor } = livro;
console.log(titulo);
console.log(autor);

function AutorTitulo(a) {
  return `Título: ${a.titulo}, Autor: ${a.autor}`;
}

console.log(AutorTitulo(livro));
