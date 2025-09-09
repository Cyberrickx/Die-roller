const display = document.getElementById("display");
const genBtn = document.getElementById("generate");

genRandNum();

function genRandNum() {
  let randNum = Math.floor(Math.random() * 6);
  console.log(randNum);
  return randNum;
}

