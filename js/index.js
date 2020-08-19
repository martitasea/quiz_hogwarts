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

let container = document.getElementById("game");
let results=document.getElementById("punctuation");
let cardResults=`
        <div id="punctuation">
            <p class="results"><span id="hits">X</span> ACIERTOS<br><span id="faults">X</span> FALLOS</p>
            <a class="button" class="special" href="question.html">COMENZAR!</a>
        </div>`;

// PARA QUE EN EL INICIO ME MUESTRE LA PRIMERA PREGUNTA DEL ARRAY
let click = 0;
let cardAnswers = `
    <p class="question">${questionDb[click].question}</p>
    <a href="#" id="one" class="answer" onclick="cambio()" >a) ${questionDb[click].answers[0]}</p>
    <a href="#" id="two" class="answer" onclick="cambio()">b) ${questionDb[click].answers[1]}</p>
    <a href="#" id="third" class="answer" onclick="cambio()">c) ${questionDb[click].answers[2]}</p>`;
container.innerHTML = cardAnswers;

function cambio() {
    if (click < 2) {
        click += 1;
        cardAnswers = `
            <p class="question">${questionDb[click].question}</p>
            <a href="#" id="one" class="answer" onclick="cambio()" >a) ${questionDb[click].answers[0]}</p>
            <a href="#" id="two" class="answer" onclick="cambio()">b) ${questionDb[click].answers[1]}</p>
            <a href="#" id="third" class="answer" onclick="cambio()">c) ${questionDb[click].answers[2]}</p>`
        container.innerHTML = cardAnswers;
    } 
    else { container.innerHTML = cardResults; }
};

    // TEMPLATE STRINGresults.html};}


// PARA QUE AL HACER CLICK EN CUALQUIER RESPUESTA, EL PROGRAMA SEPA QUE HEMOS HECHO CLICK Y EJECUTE LA FUNCIÓN CAMBIO
// let a = document.getElementById("one");
// a.onclick = () => {
//     console.log("he hecho click en one")
//     answersDB.push[0];
//     click += 1;
//     card = `
//     <p class="question">${questionDb[click].question}</p>
//     <a href="#" id="one" class="answer" >a) ${questionDb[click].answers[0]}</p>
//     <a href="#" id="two" class="answer">b) ${questionDb[click].answers[1]}</p>
//     <a href="#" id="third" class="answer">c) ${questionDb[click].answers[2]}</p>`
//     container.innerHTML = card;
// }
// let b = document.getElementById("two");
// b.onclick = () => {
//     console.log("he hecho click en two")
//     answersDB.push[1];
//     click += 1;
//     card = `
//     <p class="question">${questionDb[click].question}</p>
//     <a href="#" id="one" class="answer" >a) ${questionDb[click].answers[0]}</p>
//     <a href="#" id="two" class="answer">b) ${questionDb[click].answers[1]}</p>
//     <a href="#" id="third" class="answer">c) ${questionDb[click].answers[2]}</p>`
//     container.innerHTML = card;
// }
// let c = document.getElementById("third")
// c.onclick = () => {
//     console.log("he hecho click en third")
//     answersDB.push[2];
//     click += 1;
//     card = `
//     <p class="question">${questionDb[click].question}</p>
//     <a href="#" id="one" class="answer" >a) ${questionDb[click].answers[0]}</p>
//     <a href="#" id="two" class="answer">b) ${questionDb[click].answers[1]}</p>
//     <a href="#" id="third" class="answer">c) ${questionDb[click].answers[2]}</p>`
//     container.innerHTML = card;
// }

// function cambio() {
//     console.log(click);
//     console.log("cambio está funcionando!");
//     console.log(answersDB);
// card = `
//     <p class="question">${questionDb[click].question}</p>
//     <a href="#" id="one" class="answer">a) ${questionDb[click].answers[0]}</p>
//     <a href="#" id="two" class="answer">b) ${questionDb[click].answers[1]}</p>
//     <a href="#" id="third" class="answer">c) ${questionDb[click].answers[2]}</p>`
//     container.innerHTML = card;
//     console.log(card);
// }
// console.log(click);
// click=7;
// console.log(card);
// let but = document.getElementById("boton")
// but.onclick = () => {
//     container.innerHTML = card;
// }