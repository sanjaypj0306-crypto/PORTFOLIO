document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".experience-section");

  // Intersection Observer for reveal effect
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("visible");
        const items = section.querySelectorAll(".experience-details li");

        items.forEach((item) => {
          item.style.animation = "none";
          void item.offsetHeight; // re-trigger animation
          item.style.animation = `highlightTrail 1s ease-out forwards`;
          item.style.animationDelay = item.style.getPropertyValue("--delay");
        });
      } else {
        section.classList.remove("visible");
      }
    },
    { threshold: 0.3 }
  );

  if (section) observer.observe(section);

  // Scale effect on scroll (optional, if you have .experience-image)
  window.addEventListener("scroll", () => {
    const image = document.querySelector(".experience-image");
    if (!image) return;
    const scrollTop = window.scrollY;
    const offset = Math.min(scrollTop / 1000, 0.15);
    image.style.transform = `scale(${1 + offset})`;
  });
});
