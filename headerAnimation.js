const text = "designer";
const displayElement = document.getElementById("animated-header");
const typeSpeed = 1000;
const deleteSpeed = 1000;

let index = 0;
let isDeleting = false;
let timeoutId;

function animation() {
  if (!isDeleting && index <= text.length) {
    // Display the current substring of `text`
    displayElement.innerText = text.slice(0, index) + "|";
    index++;

    // Continue tyrping after a delay
    clearTimeout(timeoutId);
    timeoutId = setTimeout(animation, typeSpeed); // Continue typing after a delay

    // if typing is complete, set isDeleting to true and timeout
    if (index > text.length) {
      isDeleting = true;
      setTimeout(animation, 1000);
    }
    // if isDeleting is true and not complete, continue deleting
  } else if (isDeleting && index > 0) {
    displayElement.innerText = text.slice(0, index) + "|";
    index--;

    // Continue deleting after a delay
    clearTimeout(timeoutId);
    timeoutId = setTimeout(animation, deleteSpeed);

    if (index === 0) {
      isDeleting = false;
      setTimeout(animation, 3000);
    }
  }
}

animation();
