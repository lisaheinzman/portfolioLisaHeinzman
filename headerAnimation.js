const text = ["designer", "developer", "digital artist"];
const displayElement = document.getElementById("animated-header");
const typeSpeed = 300;
const deleteSpeed = 150;

let index = 0;
let wordIndex = 0;
let isDeleting = false;
let timeoutId;

function animation() {
  if (!isDeleting && index <= text[wordIndex].length) {
    // Display the current substring of `text`
    displayElement.innerText = text[wordIndex].slice(0, index) + "|";
    index++;

    // Continue tyrping after a delay
    clearTimeout(timeoutId);
    timeoutId = setTimeout(animation, typeSpeed); // Continue typing after a delay

    // if typing is complete, set isDeleting to true and timeout
    if (index > text[wordIndex].length) {
      isDeleting = true;
      setTimeout(animation, 1000);
    }
    // if isDeleting is true and not complete, continue deleting
  } else if (isDeleting && index > 0) {
    displayElement.innerText = text[wordIndex].slice(0, index) + "|";
    index--;

    // Continue deleting after a delay
    clearTimeout(timeoutId);
    timeoutId = setTimeout(animation, deleteSpeed);

    // if deleting is complete, set to false and go to the next word
    if (index === 0) {
      isDeleting = false;
      setTimeout(animation, 3000);
      if (wordIndex < text.length - 1) {
        wordIndex++;
      } else if (wordIndex === text.length - 1) {
        wordIndex = 0;
      }
    }
  }
}

animation();
