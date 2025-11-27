/**
 * Toggle mobile menu visibility
 */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  if (menu && icon) {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerNav = document.querySelector("#hamburger-nav");
  
  if (
    menu &&
    icon &&
    hamburgerNav &&
    !hamburgerNav.contains(event.target) &&
    menu.classList.contains("open")
  ) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
