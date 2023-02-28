let question = [
  {
    title: "A complete graph can have",
    option: [
      "n2 spanning tree",
      "nn spanning tree",
      "nn 2 spanning tree",
      "n spanning tree",
    ],
    correct_ans: "nn 2 spanning tree",
    score: 1,
  },
  {
    title: "What does the abbreviation HTML stand for?",
    option: [
      "HyperText Markup Language",
      "HighText Markup Language",
      "Hyper Text Markdown Language",
      "None of above",
    ],
    correct_ans: "HyperText Markup Language",
    score: 1,
  },
  {
    title: "How many sizes of headers are available in HTML by default?",
    option: ["0", "3", "5", "6"],
    correct_ans: "6",
    score: 1,
  },
  {
    title: "How to create an ordered list in HTML?",
    option: ["ol", "ul", "li", "None of above"],
    correct_ans: "ol",
    score: 1,
  },
  {
    title:
      "Which attribute is used to provide a unique name to an HTML element?",
    option: ["Class", "Id", "Type", "Style"],
    correct_ans: "Id",
    score: 1,
  },
  {
    title: "What does Css stands for?",
    option: [
      "Cool SheetStyle",
      "Color SheetStyle",
      "Cascading SheetStyle",
      "Cascading StyleSheet",
    ],
    correct_ans: "Cascading StyleSheet",
    score: 1,
  },
  {
    title: " Javascript is an _______ language?",
    option: [
      "Object Oriented language",
      "Procedural language",
      "Object-based",
      "None of above",
    ],
    correct_ans: "Object Oriented language",
    score: 1,
  },
  {
    title:
      "Which of the following methods is used to access HTML elements using Javascript?",
    option: [
      "getElementById()",
      "getElementByTagName()",
      "Both i and ii",
      "None of above",
    ],
    correct_ans: "Both i and ii",
    score: 1,
  },
  {
    title:
      "Which of the following methods can be used to display data in some form using Javascript?",
    option: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of above",
    ],
    correct_ans: "All of above",
    score: 1,
  },
];

let quesCount = 0,
  x,
  y,
  iscor,
  cor,
  totalscore = 0,
  ques,
  ul,i=0,j;
let sub = document.getElementById("submit");
let next = document.getElementById("next");
let restart = document.getElementById("restart");
let ans = document.getElementsByName("ans");

function addQues(quesCount) {
    ans[i].checked=false;
  ques = document.getElementById("container");
  ques.innerHTML = "";

  ques = document.getElementById("ques");
  ques.innerHTML = question[quesCount].title;

  ul = document.createElement("ul");

  let op1 = document.getElementById("op1");
  op1.innerHTML = question[quesCount].option[0];
  document
    .getElementById("r1")
    .setAttribute("value", question[quesCount].option[0]);

  let op2 = document.getElementById("op2");
  op2.innerHTML = question[quesCount].option[1];
  document
    .getElementById("r2")
    .setAttribute("value", question[quesCount].option[1]);

  let op3 = document.getElementById("op3");
  op3.innerHTML = question[quesCount].option[2];
  document
    .getElementById("r3")
    .setAttribute("value", question[quesCount].option[2]);

  let op4 = document.getElementById("op4");
  op4.innerHTML = question[quesCount].option[3];
  document
    .getElementById("r4")
    .setAttribute("value", question[quesCount].option[3]);

  x = document.createElement("button");
  x.setAttribute("class", "btn btn-warning");
  x.innerHTML = "Submit";
  sub.appendChild(x);
}

addQues(0);

sub.addEventListener("click", function () {
 
    j = -1;
  for (i = 0; i < ans.length; i++) {
    if (ans[i].checked) {
      j = i;
      break;
    }
  }
  if (j === -1) {
    window.alert("Please select an appropriate option.");
  }

  if (ans[i].value === question[quesCount].correct_ans) {
    iscor = document.getElementById("isCorrect");
    cor = document.createElement("span");
    cor.innerHTML = "correct";
    cor.setAttribute(
      "style",
      "background-color: rgb(175, 255, 175); width: 50px;font-size:20px; height: 30px; color:green; padding:15px; font-weight:500;"
    );
    iscor.appendChild(cor);
    totalscore++;
  } else {
    iscor = document.getElementById("isCorrect");
    cor = document.createElement("span");
    cor.innerHTML = "incorrect";
    cor.setAttribute(
      "style",
      "background-color: rgb(255, 171, 171); width: 50px;font-size:20px; height: 30px; color:red; padding:15px; font-weight:500"
    );
    iscor.appendChild(cor);
  }
  
  quesCount++;
  sub.removeChild(x);
  y = document.createElement("button");
  y.setAttribute("class", "btn btn-success");
  y.innerHTML = "Next";
  next.appendChild(y);

  if (quesCount == question.length) {
    showRes();
  }
});

next.addEventListener("click", function () {
  iscor.removeChild(cor);
  addQues(quesCount);
  next.removeChild(y);
  
});

function showRes() {
  document.getElementById("head").innerHTML = "Your Score: " + totalscore;
  ul = document.getElementById("ul");
  ul.remove();
  next.removeChild(y);
  iscor.removeChild(cor);
  ques = document.getElementById("container");
  ques.innerHTML = "Answer Key";
  ques.setAttribute("style", "font-size:30px; font-weight:bold;");
  let x = document.getElementById("ques");
  x.innerHTML = "";

  ul = document.createElement("ul");
  ul.setAttribute("style", "list-style-type:disc;");
  for (var i = 0; i < question.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = question[i].title + " - ";
    let span = document.createElement("span");
    span.innerHTML = question[i].correct_ans;
    span.setAttribute(
      "style",
      "font-size:12px; color:white; background-color:#4BB543; font-weight:bold;border-radius:4px;padding:2px"
    );
    li.appendChild(span);
    li.setAttribute("style", "font-size:20px;");
    ul.appendChild(li);
  }
  let col = document.getElementById("col");
  col.appendChild(ul);
  let z= document.createElement("button");
  z.setAttribute("class", "btn btn-primary");
  z.innerHTML = "Restart";
  restart.appendChild(z);
  col.appendChild(restart);
}
