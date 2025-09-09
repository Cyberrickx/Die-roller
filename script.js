const display = document.getElementById("display");
const genBtn = document.getElementById("generate");

genRandNum();

function genRandNum() {
  let randNum = Math.floor(Math.random() * 6);
  
  return randNum;
}

function swapNumPng() {
  let num = genRandNum() + 1;

  console.log(num);
  switch (num) {
    case 1:
      display.innerHTML =
        "<img src='image/1.png' alt='Die face showing one dot'>";
      break;
    case 2:
      display.innerHTML =
        "<img src='image/2.png' alt='Die face showing two dots'>";
      break;
    case 3:
      display.innerHTML =
        "<img src='image/3.png' alt='Die face showing three dots'>";
      break;
    case 4:
      display.innerHTML =
        "<img src='image/4.png' alt='Die face showing four dots'>";
      break;
    case 5:
      display.innerHTML =
        "<img src='image/5.png' alt='Die face showing five dots'>";
      break;
    case 6:
      display.innerHTML =
        "<img src='image/6.png' alt='Die face showing six dots'>";
      break;
    default:
      break;
  }
}

genBtn.addEventListener("click", swapNumPng);
