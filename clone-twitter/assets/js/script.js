function imprimirNoConsole(event){
    event.preventDefault();
    const tweetTextArea = textarea.value;
    console.log(tweetTextArea);
}

const tweetar = document.querySelector("button");
const textarea = document.querySelector("textarea");

tweetar.addEventListener("click", imprimirNoConsole);

