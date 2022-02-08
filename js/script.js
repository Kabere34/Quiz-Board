const corrrectAnswers = {
  qstn1: "()[].++",
  qstn2: "NO",
  qstn3: "Properties",
  qstn4: "Place where code is executed using execution context",
  qstn5: "const arr={1,2,3,4}",
  qstn6: "Decrements length by 1",
};

let selectedAnswers = {};

const handleSelect = (e) => {
  selectedAnswers[e.name] = e.value;
};

const handleSubmit = () => {
  let count = 0;
  Object.keys(corrrectAnswers).forEach((element) => {
    if (corrrectAnswers[element] === selectedAnswers[element]) {
      count++;
    }
  });
  let percentage = (count / 6) * 100;
  percentage = Math.floor(percentage);

  document.getElementById("myModal").style.display = "block";

  if (percentage > 80) {
    document.getElementById(
      "results"
    ).innerText = `YOUR SCORE IS ${percentage}%.You have excellently passed.`;
  } else if (percentage >= 50 && percentage <= 80) {
    document.getElementById(
      "results"
    ).innerText = `YOUR SCORE IS ${percentage}%.You have fairly passed.`;
  } else {
    document.getElementById(
      "results"
    ).innerText = `YOUR SCORE IS ${percentage}%.  You have scored poorly. Retake test!!`;
  }
};
window.onclick = function (event) {
  let modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
