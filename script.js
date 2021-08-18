
  //General quiz questions 
const quizData = [
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What year was React.Js launched?",
        a: "2011",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "a",
    },
];

//IDS for each functionalities 
const quiz          = document.getElementById("quiz");
const answerEls     = document.querySelectorAll(".answer");
const questionEl    = document.getElementById("question");
const a_text        = document.getElementById("a_text");
const b_text        = document.getElementById("b_text");
const c_text        = document.getElementById("c_text");
const d_text        = document.getElementById("d_text");
const submitBtn     = document.getElementById("submit");

//initalising the inbuild currentquiz score 0 & inital scoree will be 0
let currentQuiz = 0;
let score = 0;

loadQuiz();

//for starting quiz
function loadQuiz() {
    deselectAnswers(); //for De-seclected answers get the the test score 0 so it will be the inital functionality 

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//functionality for Seclected answers 
function getSelected() {   
    let answer = undefined; //no showing correct answers 

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id; //get the feeded inbuild correct answer to verify 
        }
    });

    return answer;
}

//functionality for De-seclected answers 
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false; //then test score will be 0
    });
}

//submit-Button 
submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    //two possiblities if the answer is correct increase the score by 1 else 0 
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;//afetr the inital question increase the question by 1 
        //if the currentQuiz gets over and show the results and reloads the page 
        if (currentQuiz < quizData.length) {
            loadQuiz();//function to load the quiz (repeat)
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button> 
            `;
        }
    }
});
