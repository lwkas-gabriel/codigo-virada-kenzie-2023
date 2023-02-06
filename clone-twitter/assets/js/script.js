function pegarTweet(event){
    event.preventDefault();
    const tweetTextArea = textarea.value;
    criarTweet(tweetTextArea);
}

function criarTweet(tweetTexto){
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    const tweet = {
        nome: "Daniel",
        foto: "./src/ProfilePic.png",
        usuario: "@danielkenzie",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTweet(tweet);
}

function listarTweet(tweet){

}

const tweetar = document.querySelector("button");
const textarea = document.querySelector("textarea");

tweetar.addEventListener("click", pegarTweet);

