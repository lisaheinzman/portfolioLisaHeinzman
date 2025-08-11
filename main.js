import { scrollToTop } from "./scroll.js";

/* Open PDF */
window.openPDF = function openPDF(pdfUrl) {
  const windowFeatures = "width=800,height=600,scrollbars=yes,resizable=yes";
  window.open(pdfUrl, "_blank", windowFeatures);
};

/* Youtube iframe */
document
  .getElementById("openPopupButton")
  .addEventListener("click", function () {
    // Show the popup and set the iframe src to load the video
    document.getElementById("popup").style.display = "flex";
    document.getElementById("videoIframe").src =
      "https://www.youtube.com/embed/WmXobtxSMQQ?si=HeFbwA86hMfDOoQB"; // Embed URL
  });

document
  .getElementById("closePopupButton")
  .addEventListener("click", function () {
    // Hide the popup and stop the video by clearing the iframe src
    document.getElementById("popup").style.display = "none";
    document.getElementById("videoIframe").src = "";
  });

/* Handles Animations */
document.addEventListener("DOMContentLoaded", () => {
  // Select all buttons (or links) that trigger scrolling
  const scrollButtons = document.querySelectorAll("[data-target]");

  // Add click event listeners to each scroll button
  scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target"); // Get the target container ID
      scrollToTop(targetId); // Scroll to the target container
    }); //
  });
});

// Map class names to their corresponding animation classes
const classToAnimation = {
  paragraph: "fade",
  scroll: "scroll-right-anim",
  scrollL: "scroll-left-anim",
  pop: "fade-in",
};

// Checks if elements are being scrolled past
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Loop through the class-to-animation mapping and add the animation class
        for (const className in classToAnimation) {
          if (entry.target.classList.contains(className)) {
            entry.target.classList.add(classToAnimation[className]);
          }
        }
        // Remove the fade-out class to allow fade-in animation
        entry.target.classList.remove("fade-out");
        observer.unobserve(entry.target); // Stop observing after adding class
      } else {
        // When element is out of view, add the fade-out class
        entry.target.classList.add("fade-out");

        // Loop through class-to-animation mapping and remove the animation class
        Object.keys(classToAnimation).forEach((className) => {
          if (entry.target.classList.contains(className)) {
            entry.target.classList.remove(classToAnimation[className]);
          }
        });
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  }
);

// Select the elements to observe
const targetElements = document.querySelectorAll(
  ".paragraph, .scroll, .pop, .icon, .scrollL"
);

// Observe each element
targetElements.forEach((element) => {
  observer.observe(element);
});
