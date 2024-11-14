document.getElementById("hamburger").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  // Toggle the display of the mobile menu
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
});
