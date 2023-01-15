{const quizData = [
    {
        question: "Which of the following is a group 7 element",
        a:"Calcium",
        b : "Oxygen",
        c : "Bromine",
        d : "Berylium",
        no:1,
        correct : "c",
    },
    {  
        question: "A subtance with turn blue litmus papper Red is ",
        a:"Acid",
        b : "Base ",
        c : "Salt",
        d : "Sugar",
        no:2,
        correct : "a",
    },
    {  
        question: " What is the unit of force ",
        a:"Joule",
        b : "Kelvin ",
        c : "coulumb",
        d : "Newton",
        no:3,
        correct : "d",
    },
    {  
        question: " An example of scalar quantity is ",
        a:"Velocity",
        b : "Work ",
        c : "Force",
        d : "Electric field intensity",
        no:4,
        correct : "b",
    },
    {  
        question: " In what year was JavaScript launched ",
        a :"1996",
        b : "1995 ",
        c : "1994",
        d : "none of the above",
        no:5,
        correct : "d",
    }
];
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl  = document.querySelector(".question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
const num = document.getElementById("number")

let currentQuiz = 0
let score = 0 
loadQuiz()
  
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question
    num.innerHTML = currentQuizData.no
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
    deselectAnswer()
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
       answerEl.checked = false
    })
}
function getSelected() {
    let answer = undefined;
   
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


submitBtn.addEventListener("click", () => {
    const answer =  getSelected()
     if(answer=== quizData[currentQuiz].correct){
        score ++ 
     }
    if(answer ){
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2>You answered correctly at   ${score} / ${quizData.length} questions. </h2> <button onclick="location.reload()"> Restart </button>`
        }
    }
    
})}