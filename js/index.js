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
// let container = document.getElementById("game")
// questionDb.map((question) => {
//     let card = `
//             <p class="question">${questionDb.question}</p>
//             <a href="#" class="answer">a) ${questionDb.answers[0]}</p>
//             <a href="#" class="answer">b) ${questionDb.answers[1]}</p>
//             <a href="#" class="answer">c) ${questionDb.answers[2]}</p>
//         `;
//     container.innerHTML += card;
// })
// questionDb.map((item) => {
//     document.getElementById("question").innerHTML = questionDb.question;
//     document.getElementById("one").innerHTML = "a) " + questionDb.answers[0];
//     document.getElementById("two").innerHTML = "b) " + questionDb.answers[1];
//     document.getElementById("third").innerHTML = "c) " + questionDb.answers[2];
// })

// console.log(questionDb[1].question)


// ESTO FUNCIONA
// document.getElementById("question").innerHTML = questionDb[0].question;
// document.getElementById("one").innerHTML = "a) " + questionDb[0].answers[0];
// document.getElementById("two").innerHTML = "b) " + questionDb[0].answers[1];
// document.getElementById("third").innerHTML = "c) " + questionDb[0].answers[2];

// console.log(document.getElementById("question"));

// function cambiar() {
//     document.getElementById("question").innerHTML = questionDb[0].question;
//     document.getElementById("one").innerHTML = "a) " + questionDb[0].answers[0];
//     document.getElementById("two").innerHTML = "b) " + questionDb[0].answers[1];
//     document.getElementById("third").innerHTML = "c) " + questionDb[0].answers[2];
// }
// document.getElementsByClassName("answer").onclick = cambiar();

// for (i = 0, i < questionDb.length, document.getElementsByClassName("answer.onclick"))

document.getElementById("answer").map.onclick = () => {
    console.log("Has hecho click")
    cambiar()
};
function cambiar() {
    document.getElementById("titulo").innerHTML = "Te he cambiado"
};