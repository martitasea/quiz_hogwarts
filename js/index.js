// CREAMOS UN ARRAY DE PREGUNTAS Y RESPUESTAS
let questionDb = [
  {
    question: "1 ¿Qué famoso arquitecto construyó la casa de la cascada?",
    answers: ["Mies van der Rohe", "Frank Lloyd Wright", "Antoni Gaudí"],
    image: "../img/casaCascada.jpg",
    rightAnswer: 1,
  },
  {
    question: "2 ¿Cúal es el arquitecto del museo Guggenheim de Bilbao?",
    answers: ["Frank Ghery", "Norman Foster", "Rafael Moneo"],
    image: "../img/guggenheim.jpg",
    rightAnswer: 0,
  },
  {
    question: "3 ¿Qué longitud tien la Gran Muralla China?",
    answers: ["6.400 km", "3.150 km", "840 km"],
    image: "../img/murallaChina.jpg",
    rightAnswer: 0,
  },
  {
    question: "4 ¿Qué edificio es el de la fotografía?",
    answers: [
      "Glass House, de Philip Johnson",
      "Casa Rietveld Schröder, de Gerrit Rietveld",
      "Case Study House 8, de  Charles y Ray Eames",
    ],
    image: "../img/edificio01.jpg",
    rightAnswer: 1,
  },
  {
    question: "5 ¿Dónde nació Norman Foster?",
    answers: ["Inglaterra", "Australia", "Nueva Zelanda"],
    image: "../img/normanFoster.jpg",
    rightAnswer: 0,
  },
  {
    question:
      "6  ¿Cuál de los siguientes arquitectos no participó en eldiseño del Georges Pompidou de París?",
    answers: ["Renzo Piano", "Richard Rogers", "Norman Foster"],
    image: "../img/pompidou.jpg",
    rightAnswer: 2,
  },
  {
    question:
      "7 ¿En qué año comenzó a otorgarse el premio Pritzker de arquitectura?",
    answers: ["1979", "1992", "1963"],
    image: "../img/pritzker.png",
    rightAnswer: 0,
  },
  {
    question: "8 ¿Cuál es el edificio de la fotografía?",
    answers: [
      "Casa del Fascio",
      "Filarmónica de Berlín",
      "Asamblea de Chandigarh",
    ],
    image: "../img/chandigarh.jpg",
    rightAnswer: 2,
  },
  {
    question: "9 ¿Qué es el Modulor?",
    answers: [
      "La unidad de medida básica de la antigua Roma",
      "Un ensayo sobre la escala humana aplicada a la arquitectura",
      "Una escultura ciclópea construida en Francia",
    ],
    image: "../img/modulor.png",
    rightAnswer: 1,
  },
  {
    question:
      "10 ¿Cómo se llama el triangulo que tiene todos sus lados diferentes?",
    answers: ["Isósceles", "Escaleno", "Equilátero"],
    image: "../img/triangulo.png",
    rightAnswer: 1,
  },
];

// FIJAMOS EL INICIO DE FALLOS Y ACIERTOS EN 0
let aciertos = 0;
let fallos = 0;

//   CREAMOS UN ARRAY CON LAS RESPUESTAS CORRECTAS
let answerDbCorrect = [];
let numAnswers = questionDb.length;
for (i = 0; i < numAnswers; i++) {
  answerDbCorrect.push(questionDb[i].rightAnswer);
}
console.log("Las respuestas correctas son " + answerDbCorrect);

// CREAMOS UN ARRAY VACÍO PARA IR METIENDO LAS RESPUESTAS DEL CONCURSANTE
let answerDb = [];

// HACEMOS QUE SE MUESTREN LAS SUCESIVAS PREGUNTAS
let container = document.getElementById("game");
let results = document.getElementById("punctuation");
let cardResults = `
<div id="punctuation">
<p class="results"><span id="hits">${aciertos}</span> ACIERTOS<br><span id="faults">${fallos}</span> FALLOS</p>
<a class="button" class="special" href="question.html">COMENZAR!</a>
</div>    
`;

// PARA QUE EN EL INICIO ME MUESTRE LA PRIMERA PREGUNTA DEL ARRAY
let click = 0;
let cardAnswers = `
<p class="question">${questionDb[click].question}</p>
<a href="#" id="one" class="answer" onclick="cambio()" >a) ${questionDb[click].answers[0]}</p>
<a href="#" id="two" class="answer" onclick="cambio()">b) ${questionDb[click].answers[1]}</p>
<a href="#" id="third" class="answer" onclick="cambio()">c) ${questionDb[click].answers[2]}</p>
<img src=${questionDb[click].image} alt="No puedo mostar la imagen" title="The quiz">
`;
container.innerHTML = cardAnswers;

// HACEMOS LA FUNCIÓN QUE SE EJECUTA CUANDO SE HACE CLICK EN UNA RESPUESTA
function cambio() {
  if (click < numAnswers - 1) {
    click += 1;
    cardAnswers = `
        <p class="question">${questionDb[click].question}</p>
        <a href="#" id="one" class="answer" onclick="cambio()" >a) ${questionDb[click].answers[0]}</a>
        <a href="#" id="two" class="answer" onclick="cambio()">b) ${questionDb[click].answers[1]}</a>
        <a href="#" id="third" class="answer" onclick="cambio()">c) ${questionDb[click].answers[2]}</a>
        <img src=${questionDb[click].image} alt="image">`;
    container.innerHTML = cardAnswers;
    answerDb[click - 1] = 1;
    console.log("Las respuestas del concursante son " + answerDb);
    console.log(answerDb);
  } else {
    container.innerHTML = cardResults;
}


// COMPARAMOS LOS RESULTADOS DEL CONCURSANTE CON LOS CORRECTOS
console.log("Respuestas del concursante"+answerDb);
for (i = 0; i < numAnswers; i++) {
    if (answerDb.length==answerDbCorrect.length && answerDbCorrect[i] == answerDb[i]) {
        aciertos ++;
        console.log("estos son los aciertos" + aciertos);
    } else if (answerDb.length==answerDbCorrect){
        fallos ++;
    } else
}
