const quizData  = [
    {
      question: "The permit to work system is very important procedure that control work to ensure a safe working environment",
      a:"maybe",
      b:"sometimes",
      c:"false",
      d:"true",
      correct:"d",
    },
    {
        question: "when is the permit to work system used ",
        a:"For the routine work only",
        b:"for non-hazardous work only",
        c:"for all non-routine to potentially hazardous work",
        d:"for electrical work only",
        correct:"c",
    },
    {
        question:"Who is involved in the permit to work system",
        a:"management only",
        b:"Permit Authority",
        c:"All personel within the common facility",
        d:"Supervisor only",
        correct:"c",
    },
    { 
        question:"From which specific location is the permit to work system administered?",
        a:"The maintenance department",
        b:"The Permit Authority's Office",
        c:"The Worksite ",
        d:"The conotrol Room",
        correct: "d",
    },
    {   
        question: "which documents is used to control potentially hazardous work?",
        a:"Manufacures' information",
        b:"work permits",
        c:"P & IDs",
        d:"Certificates",
        correct:"b"

    },
    {
        question: "how many Permit to work are there in Dukhan",
        a: "3",
        b: "4",
        c: "5",
        d: "none",
        correct: "a",
    },

    

];

const quiz= document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz ()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected (){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer= answerEl.id}
        })
        return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer ===  quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2>You answered ${Math.round(score/quizData.length*100)}% </h2>
            <button onclick="location.reload()">Reload</button>
            <button onclick="location.href = 'https://quiz-mainpage.vercel.app/';">Go Back</button>
            `
        }
    }
})
