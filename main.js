let questions = [
  {
      id: 1,
      question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
      answer: "Motherboard",
      options: [
          "CPU",
          "Hard Disk Drive",
          "Motherboard",
          "RAM"
      ]
  },
  {
      id: 2,
      question: "How long is an IPv6 address?",
      answer: "128bits",
      options: [
          "32bits",
          "128 bits",
          "64 bits",
          "128bytes"

      ]
  },
  {
      id: 3,
      question: "Which computer language would you associate Django framework with?",
      answer: "Python",
      options: [
          "c++",
          " c# ",
          "Java",
          "Python"
      ]
  },
  {
      id: 4,
      question: "On Twitter, what is the character limit for a Tweet?",
      answer: "140",
      options: [
          "140",
          "160",
          "120",
          "100"

      ]
  },
  {
      id: 5,
      question: "In #00FF00, what color would be displayed from the color code?",
      answer: "Green",
      options: [
          "Yellow",
          "Blue",
          "Green",
          "Black"
      ]
  }
];

let question_count = 0;
let points = 0;
let user_points = sessionStorage.getItem("points");


window.onload = function () {
  show(question_count);

};

function next() {
  let user_answer = document.querySelector("button.option.active").innerHTML;
  // check if answer is right or wrong
  if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
  }
  


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
      location.href = "end.html";
      return;
      
  }
   

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  Q${count + 1}. ${questions[count].question}
  <div class="options">
     <button class=option>${first}</button> 
     <button class=option>${second}</button> 
     <button class=option>${third}</button>
     <button class=option>${fourth}</button>
  </div>`;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("button.option");
  for (let i = 0; i < option.length; i++) {
      option[i].onclick = function () {
          for (let i = 0; i < option.length; i++) {
              if (option[i].classList.contains("active")) {
                  option[i].classList.remove("active");
              }
          }
          option[i].classList.add("active");
      };
  }
}
document.querySelector("span.points").innerHTML = user_points;




