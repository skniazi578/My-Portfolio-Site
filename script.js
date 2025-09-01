const sections = document.querySelectorAll("section");

function checkScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // If section is in viewport (partially or fully visible)
    if (sectionTop < windowHeight - 150 && sectionBottom > 150) {
      section.classList.add("show"); // Animate when visible
    } else {
      section.classList.remove("show"); // Remove animation when out of view
    }
  });
}

// Run on scroll
window.addEventListener("scroll", checkScroll);

// Run on first load
checkScroll();
