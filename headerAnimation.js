const text = "designer";
const displayElement = document.getElementById("animated-header");
const typingSpeed = 100;
let index = 0;

function animation() {
  if (index <= text.length) {
    // Display the current substring of `text`
    displayElement.innerText = text.slice(0, index) + "|";
    index++;
    setTimeout(animation, typingSpeed); // Continue typing after a delay
  }
}

animation();
