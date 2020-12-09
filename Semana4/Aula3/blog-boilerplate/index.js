const post = {
    titulo: document.getElementById("titulo-post"),
    autor: document.getElementById("autor-post"),
    conteudo: document.getElementById("conteudo-post"),
    corpoPost: document.getElementById("container-de-posts")
   
}

console.log(post)

let botao = document.getElementById("botao-criar")

function criouPost() {
    post.corpoPost.innerHTML += `<h1>${post.titulo.value}</h1>`+`<h2>${post.autor.value}</h2>`+`<h3>${post.conteudo.value}</h3>`
    post.titulo.value = ""
    post.autor.value = ""
    post.conteudo.value = ""
}
