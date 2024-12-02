import { scrollToTop } from "./scroll.js";

// Add event listener to the button
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
  title: "line-up",
  test3: "fade-in",
  icon: "fade-in",
};
const classUnToAnimation = {
  paragraph: "un-fade",
  title: "un-fade",
  test3: "un-fade",
  icon: "un-fade",
};

// Checks if elements are being scrolled past
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Loop through the class-to-animation mapping and add the animation class
        for (const className in classToAnimation) {
          if (entry.target.classList.contains(className)) {
            entry.target.classList.add(classToAnimation[className]);
          }
        }
        // observer.unobserve(entry.target); // Stop observing after adding class
      } else {
        // When element is out of view, reset the classes and reassign new classes
        Object.keys(classToAnimation).forEach((className) => {
          if (entry.target.classList.contains(className)) {
            entry.target.classList.remove(classToAnimation[className]);
            if (classUnToAnimation[className]) {
              entry.target.classList.add(classUnToAnimation[className]);
            }
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
  ".paragraph, .title, .test3, .icon"
);

// Observe each element
targetElements.forEach((element) => {
  observer.observe(element);
});
