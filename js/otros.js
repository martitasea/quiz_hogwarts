    // let phase = `
//              <article>
//      <p> ${preguntas.question} </p>
//         <nav class="respuestas">
//             <a href="questions1.html">"${preguntas.answers}"</a>
//             <a href="questions1.html">${preguntas.answers }</a>
//             <a href="questions1.html">${preguntas.answers }</a>
//         </nav>
//      </article>
//             `
// console.log (phase)
// container.innerHTML += phase

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

// document.getElementById("answer").map.onclick = () => {
//     console.log("Has hecho click")
//     cambiar()
// };
// function cambiar() {
//     document.getElementById("titulo").innerHTML = "Te he cambiado"
// };


// }
// CONTAMOS EL NÚMERO DE CLICKS PARA QUE CADA VEZ QUE HAGAMOS CLICK, CAMBIE EL ÍNDICE DEL ARRAY
function cambiar() {
    document.getElementById("one").onclick = () => {
        click += 1;
        console.log(click);
    };
    document.getElementById("two").onclick = () => {
        click += 1;
        console.log(click);
    };
    document.getElementById("third").onclick = () => {
        click += 1;
        console.log(click);
    };