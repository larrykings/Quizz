const quizData  = [
    {
        question: "Where does Mayora stay now?",
        a: "Arayan",
        b: "Phil",
        c: "Manila",
        d: "Aziziya",
        correct: "d",
    },
    {
        question: "What is Grace last Name",
        a: "Ogega",
        b: "Aziziya",
        c: "Mayora",
        d: "Martillano",
        correct: "d",
    },
    {
        question: "Who does Grace Love",
        a: "All",
        b: "Levi",
        c: "Cyrus",
        d: "joy",
        correct: "a",
    },
    {
        question: "How old is Grace",
        a: "2years",
        b: "102 years",
        c: "31 years",
        d: "58 years",
        correct: "c",
    }

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
            <h2>You answered ${score}/${quizData.length} questions correctly 
            Show Me Cookie</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
