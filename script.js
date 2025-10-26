// ✅ Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// ✅ Select nav links + sections
const navLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section, .hero-container");

// ✅ Highlight when clicked
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    navItems.forEach(item => item.classList.remove("active"));

    this.classList.add("active");
    this.parentElement.classList.add("active"); // add glow to parent .nav-item
  });
});

// ✅ Highlight while scrolling
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // adjust for fixed navbar
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  if (current) {
    navLinks.forEach(link => {
      link.classList.remove("active");
      navItems.forEach(item => item.classList.remove("active"));

      if (link.getAttribute("onclick")?.includes(current)) {
        link.classList.add("active");
        link.parentElement.classList.add("active");
      }
    });
  }
});

// ✅ Animate hero heading letters (replay whenever visible)
const heading = document.getElementById("animated-heading");
if (heading) {
  const spans = heading.querySelectorAll("span");

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      // Play animation
      spans.forEach((span, index) => {
        span.style.animation = "dropVanish 1s forwards ease-out";
        span.style.animationDelay = `${index * 0.15}s`;
      });
    } else {
      // Reset animation when leaving hero
      spans.forEach(span => {
        span.style.animation = "none";
      });
    }
  }, { threshold: 0.4 });

  observer.observe(heading);
}
