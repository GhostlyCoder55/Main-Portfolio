function setMenuOpen(isOpen) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!menu || !icon) {
    return;
  }

  menu.classList.toggle("open", isOpen);
  icon.classList.toggle("open", isOpen);
  icon.setAttribute("aria-expanded", String(isOpen));
  icon.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  setMenuOpen(!(menu && menu.classList.contains("open")));
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
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

const roles = ["Software Developer", "Web Developer", "Data Scientist"];
const roleTypewriter = document.getElementById("role-typewriter");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const TYPE_MS = 80;
const DELETE_MS = 50;
const HOLD_MS = 1000;

if (roleTypewriter && roleTypewriter.dataset.bound !== "true") {
  roleTypewriter.dataset.bound = "true";
  let roleIndex = 0;
  let charIndex = 0;

  const typeNextCharacter = () => {
    const currentRole = roles[roleIndex];
    charIndex += 1;
    roleTypewriter.textContent = currentRole.slice(0, charIndex);

    if (charIndex < currentRole.length) {
      window.setTimeout(typeNextCharacter, TYPE_MS);
      return;
    }

    window.setTimeout(deleteNextCharacter, HOLD_MS);
  };

  const deleteNextCharacter = () => {
    const currentRole = roles[roleIndex];
    charIndex -= 1;
    roleTypewriter.textContent = currentRole.slice(0, Math.max(charIndex, 0));

    if (charIndex > 0) {
      window.setTimeout(deleteNextCharacter, DELETE_MS);
      return;
    }

    roleIndex = (roleIndex + 1) % roles.length;
    charIndex = 0;
    window.setTimeout(typeNextCharacter, TYPE_MS);
  };

  if (prefersReducedMotion) {
    roleTypewriter.textContent = roles[0];
    window.setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleTypewriter.textContent = roles[roleIndex];
    }, HOLD_MS);
  } else {
    typeNextCharacter();
  }
}

const copyrightYear = document.getElementById("copyright-year");
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

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
