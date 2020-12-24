// --------------------------------------------------------------
// CREAMOS UN ARRAY DE PREGUNTAS Y RESPUESTAS
// --------------------------------------------------------------
let questionDb = [
  {
    question: "1 ¿Qué elemento comparten las varitas de Harry y Voldemort?",
    answers: ["Pluma de fénix", "Fibra de corazón de dragón", "Pelo de unicornio"],
    rightAnswer: 0,
    image:"./quiz_hogwarts/img/varita.jpg",
    comment: "De hecho, las plumas venían del mismísimo Fawkes, el fénix de Dumbledore."
  },
  {
    question: "2 ¿Cuál es el Patronus de Luna Lovegood?",
    answers: ["Un gato", "Una liebre", "Un ciervo"],
    rightAnswer: 1,
    image:"./quiz_hogwarts/img/Luna_Lovegood.jpg",
    comment: "Tal cual lo vimos en La Orden del Fénix."
  },
  {
    question: "3 ¿En qué libro se besan Harry y Ginny por primera vez, y en dónde?",
    answers: ["En La Orden del Fénix, en la Sala de los Menesteres", "En El Cáliz de Fuego, en Hogsmeade", "En El Príncipe Mestizo, en la sala común de Gryffindor"],
    rightAnswer: 2,
    image:"./quiz_hogwarts/img/beso.jpg",
    comment: "Mientras que en la película se besan en la Sala de los Menesteres, en el libro es en la Sala Común después de un juego de Quidditch."
  },
  {
    question: "4 ¿Cómo se llama la hija de Ginny y Harry?",
    answers: [
      "Lily Luna.",
      "Lily Hermione",
      "Lily Alba.",
    ],
    rightAnswer: 0,
    image:"./quiz_hogwarts/img/lily.jpg",
    comment: "Su nombre completo es Lily Luna en honor a la mamá de Harry, a Luna Lovegood y a 'Lunático', el apodo de Remus Lupin."
  },
  {
    question: "5 ¿Cómo se llama la mamá de Hagrid?",
    answers: ["Wilhemina", "Maxine", "Fridwulfa"],
    rightAnswer: 2,
    image:"./quiz_hogwarts/img/hagrid.jpg",
    comment: "La mamá de Hagrid y Grawp se llamaba Fridwulfa."
  },
  {
    question: "6  ¿Qué espíritu NO aparece en el cementerio, en el libro Harry Potter y el Cáliz de Fuego?",
    answers: ["Frank Bryce", "Artemisia Lufkin", "Bertha Jorkins"],
    rightAnswer: 1,
    image:"./quiz_hogwarts/img/cementerio.jpg",
    comment: "Tanto Frank Bryce como Bertha Jorkins aparecieron junto con los papás de Harry y Cedric Diggory en el cementerio.De hecho, las plumas venían del mismísimo Fawkes, el fénix de Dumbledore."
  },
  {
    question: "7 ¿En qué fecha nació Neville y con quién comparte mes de cumpleaños?",
    answers: [
      "El 30 de Julio, en el mimso mes que Harry",
      "El 19 de Septiembre, en el mismo mes que Hermione",
      "El 31 de Diciembre, en el mismo mes que Voldemort"],
    rightAnswer: 0,
    image:"./quiz_hogwarts/img/neville.jpg",
    comment: "Harry y Neville comparten mes de cumpleaños e incluso hay una teoría de que él también pudo haber sido 'El Elegido'."
  },
  {
    question: "8 ¿Qué personaje de los libros no existe en las películas?",
    answers: [
      "Barty Crouch Jr.",
      "Peeves",
      "Elphias Doge",
    ],
    rightAnswer: 1,
    image:"./quiz_hogwarts/img/books.png",
    comment: "El poltergeist nunca aparece en las películas "
  },
  {
    question: "9 Voldemort fue el primer mago en hacer un horrocrux.",
    answers: [
      "Cierto",
      "Falso",
      "No se sabe",
    ],
    rightAnswer: 1,
    image:"./quiz_hogwarts/img/voldemort.jpg",
    comment: "Herpo fue un mago de la antigua Grecia al que se le adjudica el primer horrocrux y ser uno de los primeros en hablar Parsel."
  },
  {
    question:
      "10 ¿Quién NO fue parte del Ejército de Dumbledore?",
    answers: [
      "Lavender Brown", 
      "Michael Corner", 
      "Roger Davies"],
    rightAnswer: 2,
    image:"./quiz_hogwarts/img/dumbledore.jpg",
    comment: "Lo más que hizo el Ravenclaw fue llevar a Fleur Delacour al baile de Yule y ser capitán de su equipo de Quidditch."
  },
  {
    question:
      "11 El nombre de la Sra. Figg es...",
    answers: [
      "Arabella", 
      "Eloise", 
      "Mafalda"],
    rightAnswer: 0,
    image:"./quiz_hogwarts/img/srafigg.jpg",
    comment: "Arabella Doreen Figg era la squib encargada de vigilar a Harry mientras vivía con los Dursley."
  },
  {
    question:
      "12 ¿Qué sabor de caramelos Bertie Bott's le toca a Dumbledore en la enfermería?",
    answers: [
      "Vómito", 
      "Huevo podrido", 
      "Cera de oído"],
    rightAnswer: 2,
    image:"./quiz_hogwarts/img/bertie.png",
    comment: "Aunque prometió nunca probar un Bertie Bott's de nuevo después de que le saliera uno de vómito, en la enfermería se comió uno... con sabor a cera de oído."
  },
  {
    question:
      "13 ¿Cuánto cuesta la matrícula en Hogwarts?",
    answers: [
      "985 libras.", 
      "2.795 libras.", 
      "Nada si aciertas todas las preguntas del quiz."],
    rightAnswer: 1,
    image:"./quiz_hogwarts/img/hogwarts.jpg",
    comment: "La matrícula es gratis si has acertado todas las preguntas. ¡Apúntate!"
  },
];

// --------------------------------------------------------------
// GENERAMOS LAS VARIABLES QUE HARÁN EL LINK CON EL DOM
// --------------------------------------------------------------
let container = document.getElementById("game");
let results = document.getElementById("punctuation");

// --------------------------------------------------------------
//   CREAMOS UN ARRAY CON LAS RESPUESTAS CORRECTAS
// --------------------------------------------------------------
let answerDbCorrect = [];
let numAnswers = questionDb.length;
for (i = 0; i < numAnswers; i++) {
  answerDbCorrect.push(questionDb[i].rightAnswer);
}

// --------------------------------------------------------------
// CREAMOS UN ARRAY VACÍO PARA IR METIENDO LAS RESPUESTAS DEL CONCURSANTE
// --------------------------------------------------------------
let answerDb = [];

// --------------------------------------------------------------
// PARA QUE EN EL INICIO ME MUESTRE LA PRIMERA PREGUNTA DEL ARRAY
// --------------------------------------------------------------
let click = 0;
let cardAnswers = `
<p class="question">${questionDb[click].question}</p>
<a href="#" id="one" class="answer" onclick="cambio(0)" >a) ${questionDb[click].answers[0]}</a>
<a href="#" id="two" class="answer" onclick="cambio(1)">b) ${questionDb[click].answers[1]}</a>
<a href="#" id="third" class="answer" onclick="cambio(2)">c) ${questionDb[click].answers[2]}</a>
<img src=${questionDb[click].image} alt="No puedo mostar la imagen" class="photo" title="The quiz">
`;
// console.log(container);
// console.log(cardAnswers);
container.innerHTML = cardAnswers;

// --------------------------------------------------------------
// HACEMOS QUE SE MUESTREN LAS SUCESIVAS PREGUNTAS
// HACEMOS LA FUNCIÓN QUE SE EJECUTA CUANDO SE HACE CLICK EN UNA RESPUESTA
// --------------------------------------------------------------
function cambio(index) {
  if (click < numAnswers - 1) {
    click += 1;
    cardAnswers = `
    <p class="question">${questionDb[click].question}</p>
    <a href="#" id="one" class="answer" onclick="cambio(0)" >a) ${questionDb[click].answers[0]}</a>
    <a href="#" id="two" class="answer" onclick="cambio(1)">b) ${questionDb[click].answers[1]}</a>
    <a href="#" id="third" class="answer" onclick="cambio(2)">c) ${questionDb[click].answers[2]}</a>
    <img src=${questionDb[click].image} alt="image" class="photo">`;
    container.innerHTML = cardAnswers;
    answerDb[click - 1] = index;
  } else {
    answerDb[numAnswers - 1] = index;
    comparar();
  }
}

// --------------------------------------------------------------
// FIJAMOS EL INICIO DE FALLOS Y ACIERTOS EN 0
// --------------------------------------------------------------
let aciertos = 0;
let fallos = 0;

// --------------------------------------------------------------
// COMPARAMOS LOS RESULTADOS DEL CONCURSANTE CON LOS CORRECTOS
// --------------------------------------------------------------
function comparar() {
  for (i = 0; i < numAnswers; i++) {
    if (answerDbCorrect[i] == answerDb[i]) {
      aciertos++;
    } else {
      fallos++;
    }
  }
  let mensaje;
  if (aciertos == numAnswers) {
    mensaje = "Eres la máxima autoridad cuando se trata de Harry Potter y no hay quien te haga competencia. Por lo que te mereces saber la siguiente pista...pero no iba a ser tan fácil. Mete el pergamino en en el congelador y deja que haga su magia..." ;
  } else if (aciertos > fallos) {
    mensaje = "Sabes que eres un Potterhead y no hay quien lo niegue. Por lo que te mereces saber la siguiente pista...pero no iba a ser tan fácil. Mete el pergamino en en el sitio más frío de la casa y deja que haga su magia...";
  } else {
    mensaje = "Lo siento pero para conseguir el diploma debes intentarlo otra vez. Si pensabas que era fácil, lamentamos demostrarte lo contrario. Lo cierto es que os faltan muchas cosas por descubrir del maravilloso mundo de Harry Potter.";
  }
  let cardResults = `
    <div id="punctuation">
    <p class="text">${mensaje}</p>
    <p class="results"><span id="hits">${aciertos}</span> ACIERTOS<br><span id="faults">${fallos}</span> FALLOS</p>
    <a class="button special" href="question.html">COMENZAR</a>
    </div>    
    `;
  container.innerHTML = cardResults;
}
