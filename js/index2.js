let questionDb = [
    {
        question: "1-¿Cúal es el lugar más frío de la tierra?",
        answers: [
            "Base rusa Vostok, Antártida",
            "Domo Fuji, Antártida",
            "Base Amundse-Scott, USA"
        ],
        rightAnswer: 1
    },
    {
        question: "2-¿Cúal es el río más largo del mundo?",
        answers: [
            "Amazonas",
            "Nilo",
            "Mississippi"
        ],
        rightAnswer: 0
    },
    {
        question: "3-¿De qué color es la bandera de Tonga?",
        answers: [
            "Azúl y verde",
            "Amarilla y negra",
            "Roja y blanca"
        ],
        rightAnswer: 2
    },
    {
        question: "4-¿Cuál es el océano más grande?",
        answers: [
            "Atlántico",
            "Pacífico",
            "Índico"
        ],
        rightAnswer: 1
    },
    {
        question: "5-¿Cuál es el disco más vendido de la historia?",
        answers: [
            "Thriller, de Michael Jackson",
            "The dark side of the moon, de Pink Floyd",
            "Back in black, de ACDC"
        ],
        rightAnswer: 0
    },
    {
        question: "6-¿Cuál es el país más grande del mundo?",
        answers: [
            "Brasil",
            "China",
            "Rusia"
        ],
        rightAnswer: 2
    },
    {
        question: "7-¿Cuál es el país más poblado de la tierra?",
        answers: [
            "China",
            "Brasil",
            "India"
        ],
        rightAnswer: 0
    },
    {
        question: "8-¿Cuál fue el primer metal que usó el hombre?",
        answers: [
            "Estaño",
            "Plata",
            "Cobre"
        ],
        rightAnswer: 2
    },
    {
        question: "9-¿Quién ganó el mundial de fútbol de 2014?",
        answers: [
            "Brasil",
            "Alemania",
            "España"
        ],
        rightAnswer: 1
    },
    {
        question: "10-¿Cómo se llama el triangulo que tiene todos sus lados diferentes?",
        answers: [
            "Isósceles",
            "Escaleno",
            "Equilátero"
        ],
        rightAnswer: 1
    }];

let click = 0;
let container = document.getElementById("game");
// for (click = 0; click < questionDb.length; click++) {
    let card = `
<p class="question">${questionDb[click].question}</p>
<a href="#" id="one" class="answer">a) ${questionDb[click].answers[0]}</p>
<a href="#" id="two" class="answer">b) ${questionDb[click].answers[1]}</p>
<a href="#" id="third" class="answer">c) ${questionDb[click].answers[2]}</p>`
    container.innerHTML = card;
    console.log(card);
// }

// CONTAMOS EL NÚMERO DE CLICKS PARA QUE CADA VEZ QUE HAGAMOS CLICK, CAMBIE EL ÍNDICE DEL ARRAY
function cambiar() {
    document.getElementById("one").onclick = () => {
        click += 1;
        console.log(click);
    }
    document.getElementById("two").onclick = () => {
        click += 1;
        console.log(click);
    }
    document.getElementById("third").onclick = () => {
        click += 1;
        console.log(click);
    }
}
// cambiar();
// let oyente = document.getElementById("title");
// function cambiar() {
//     alert("hola");
// }
container.addEventListener("click", cambiar);
