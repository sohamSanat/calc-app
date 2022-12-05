let string = "";
let inputEL = document.querySelector(".input");
let buttonEls = document.querySelectorAll(".btn");
Array.from(buttonEls).forEach((button) => {
  button.addEventListener("click", (event) => {
    let innerContent = event.target.innerHTML;
    if (innerContent === "=") {
      string = eval(string);
      if (string === undefined || string === Infinity) {
        string = "Don't to gay shit";
      }
      inputEL.value = string;
    } else if (innerContent === "DEL" || innerContent === "RESET") {
      string = "";
      inputEL.value = string;
    } else {
      string += innerContent;
      inputEL.value = string;
    }
  });
});
