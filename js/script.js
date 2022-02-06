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

  console.log("e.value :>> ", e.value, selectedAnswers);
};
