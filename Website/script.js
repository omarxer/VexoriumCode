const header = document.querySelector(".topbar");
const navLinks = [...document.querySelectorAll(".links a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const updateActiveLink = () => {
  const scrollPosition = window.scrollY + 140;

  let currentSection = sections[0];
  for (const section of sections) {
    if (section.offsetTop <= scrollPosition) {
      currentSection = section;
    }
  }

  navLinks.forEach((link) => {
    link.classList.toggle(
      "is-active",
      currentSection && link.getAttribute("href") === `#${currentSection.id}`
    );
  });
};

window.addEventListener("scroll", () => {
  updateHeader();
  updateActiveLink();
});

updateHeader();
updateActiveLink();
