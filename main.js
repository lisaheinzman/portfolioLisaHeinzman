import { About } from "./about.js";
import { Skills } from "./skills.js";
import { Resume } from "./resume.js";
import { Projects } from "./projects.js";
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
    });
  });
});
// Helper function to render components
function renderComponent(containerId, component) {
  const container = document.getElementById(containerId);
  if (container) {
    container.appendChild(component());
  } else {
    console.warn(`Container with ID "${containerId}" not found.`);
  }
}

// Render components
renderComponent("about-container", About);
renderComponent("skills-container", Skills);
renderComponent("projects-container", Projects);
renderComponent("resume-container", Resume);
