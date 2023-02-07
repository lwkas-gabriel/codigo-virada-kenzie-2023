function pegarTweet(event){
    event.preventDefault();
    const tweetTextArea = textarea.value;
    textarea.value = "";
    criarTweet(tweetTextArea);
}

function criarTweet(tweetTexto){
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    const tweet = {
        nome: "Daniel",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@danielkenzie",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){
    const {nome, foto, usuario, texto, tempo} = tweet;

    let li = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet");
    let img = document.createElement("img");
    img.classList.add("tweet__fotoPerfil");
    img.src = foto;
    let div = document.createElement("div");
    div.classList.add("tweet__info")
    let h2 = document.createElement("h2");
    h2.innerText = nome;
    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`;
    let p = document.createElement("p");
    p.innerText = texto;
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);
    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
    //console.log(feed);
}

const tweetar = document.querySelector("button");
const textarea = document.querySelector("textarea");
const feed = document.querySelector(".conteudoPrincipal__listaTweets");

tweetar.addEventListener("click", pegarTweet);

