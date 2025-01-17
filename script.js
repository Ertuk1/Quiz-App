let questions = [


    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Justin Bieber",
        "answer_4": "Lady Gaga",
        "right_answer": 2
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus ?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title{...}",
        "answer_4": "a-title{...}",
        "right_answer": 1

    },
    {
        "question": "Welches Attribut kann man nicht für Textarea verwenden ?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },
    {
        "question": "wie definiert man in Javascript eine Variable ?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100",
        "answer_4": "let rate = 100",
        "right_answer": 4
    },
    {
        "question": "wie binder man eine Website in eine Website ein ?",
        "answer_1": "&lt;framge&gt",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": 2
    },
    {
        "question": "Wie wählst du alle Elemente mit der Klasse 'beispiel' in JavaScript aus?",
        "answer_1": "document.querySelector('.beispiel')",
        "answer_2": "document.getElementByClassName('beispiel')",
        "answer_3": "document.querySelectorAll('.beispiel')",
        "answer_4": "document.getElementById('.beispiel')",
        "right_answer": 3
    },
    {
        "question": "Wie fügst du einen Inline-Stil zu einem HTML-Element hinzu?",
        "answer_1": "<div style='color: red;'>Text</div>",
        "answer_2": "<div class='color: red;'>Text</div>",
        "answer_3": "<div id='color: red;'>Text</div>",
        "answer_4": "<div color='red'>Text</div>",
        "right_answer": 1
    },
    {
        "question": "Wie erstellst du einen neuen Absatz in HTML?",
        "answer_1": "<p>Neuer Absatz</p>",
        "answer_2": "<div>Neuer Absatz</div>",
        "answer_3": "<span>Neuer Absatz</span>",
        "answer_4": "<a>Neuer Absatz</a>",
        "right_answer": 1
    },
    {
        "question": "Wie erstellst du eine Funktion in JavaScript?",
        "answer_1": "function beispiel() {...}",
        "answer_2": "beispiel.function() {...}",
        "answer_3": "beispiel() = function {...}",
        "answer_4": "function = beispiel() {...}",
        "right_answer": 1
    }
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
    document.getElementById('questionNumber').innerHTML = questions.length
    showQuestion()
}

function showQuestion() {
    if(currentQuestion >= questions.length){
        document.getElementById('endScreen').style = ''
        document.getElementById('questionBody').style = 'display: none;'

        document.getElementById('amountOfQuestion').innerHTML = questions.length
        document.getElementById('rightQuestions').innerHTML = rightQuestions

        
    } else{
    let percent = (currentQuestion +1) / questions.length;
    let question = questions[currentQuestion];
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width:${percent}%;`;

    document.getElementById('questiontext').innerHTML = question.question ;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
    document.getElementById('currentNumber').innerHTML = currentQuestion + 1}

}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnsswer = `answer_${question.right_answer}`

    if(selectedQuestionNumber == question.right_answer)
    {   rightQuestions++
        document.getElementById(selection).parentNode.classList.add('bg-success')
    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnsswer).parentNode.classList.add('bg-success')
    }
    document.getElementById('next-Button').disabled = false;
}   

function nextQuestion(){
currentQuestion++;
document.getElementById('next-Button').disabled = true;
resetAnswerButtons()
showQuestion();

}

function resetAnswerButtons(){
document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
document.getElementById('answer_1').parentNode.classList.remove('bg-success')
document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
document.getElementById('answer_2').parentNode.classList.remove('bg-success')
document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
document.getElementById('answer_3').parentNode.classList.remove('bg-success')
document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
document.getElementById('answer_4').parentNode.classList.remove('bg-success')

}