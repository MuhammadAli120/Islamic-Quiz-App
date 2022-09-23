const quizData = [{
        question: "How many Ambiyaa are mentioned in the Qur'an?",
        a: "10",
        b: "19",
        c: "25",
        d: "49",
        correct: "c",
    },
    {
        question: "Over what period was the complete Qur'an revealed?",
        a: "16 year",
        b: "69 year",
        c: "150 year",
        d: "23 year",
        correct: "d",
    },
    {
        question: "What is the meaning of the Arabic word Qur'an?",
        a: "To Read Aloud",
        b: "To Read Slowly",
        c: "To Read fast",
        d: "Both A & B",
        correct: "a",
    },
    {
        question: "What is term for the breaking of the fast?",
        a: "Sehri",
        b: "Iftaar",
        c: "Dinner",
        d: "Launch",
        correct: "b",
    },
    {
        question: "What will be the first question,to be asked on the day of judgment?",
        a: "About Haqooq ul zaujain",
        b: "About Fasting",
        c: "About Haqooq ul ibad",
        d: "About Prayer",
        correct: "d",
    },
    {
        question: "How many letters are in Arabic Language?",
        a: "100",
        b: "69",
        c: "40",
        d: "29",
        correct: "d",
    },
    {
        question: "What is the most crucial quality in the success of the spread of Islam?",
        a: "Good Character",
        b: "Excellent Character",
        c: "Bad Character",
        d: "Both A & B",
        correct: "a",
    },
    {
        question: "Value of Salah in Masjid Ul Aqsa?",
        a: "1000 Times",
        b: "700 Times",
        c: "500 Times",
        d: "250 Times",
        correct: "c",
    },
    {
        question: "Value of Salah in Masjid Un Nabawi?",
        a: "1000 Times",
        b: "700 Times",
        c: "500 Times",
        d: "250 Times",
        correct: "a",
    },
    {
        question: "How many Verses are in the Qu'ran?",
        a: "7889",
        b: "6236",
        c: "4000",
        d: "8732",
        correct: "b",
    },
    {
        question: "How many letter in Qu'ran?",
        a: "345 234",
        b: "789 561",
        c: "103 482",
        d: "323 670",
        correct: "d",
    },
    {
        question: "Number of Makki Surahs in Qur'an?",
        a: "166",
        b: "69",
        c: "93",
        d: "170",
        correct: "c",
    },
    {
        question: "Number of Madani Surahs in Qur'an?",
        a: "21",
        b: "69",
        c: "35",
        d: "70",
        correct: "a",
    },
    {
        question: "What is the age of a man in heaven in Islam?",
        a: "18",
        b: "21",
        c: "25",
        d: "30",
        correct: "d",
    },
    {
        question: "Who is the first prophet in Islam?",
       a: "Adam",
       b: "Abraham",
       c: "Isaac",
       d: "Jacob",
       correct: "a",
    },
    {
        question: "Which is the longest Surah in Quran?",
        a: "first",
        b: "second",
        c: "seventh",
        d: "six",
        correct: "b",
    }
];

let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> YOUR SCORED THIS ${correct} / ${total} </h3>
        </div>
          <div class="col">
            <h3 class="w-100"> -THANK YOU PLAY THIS QUIZ- </h3>
        </div>
          <div class="col">
            <h3 class="w-100"> -CREATE BY MUHAMMAD ALI- </h3>
        </div>
          <div class="col">
            <h3 class="w-100"> -INSPIRED FORM FARHAN- </h3>
        </div>
        
    `
}
loadQuestion(index);