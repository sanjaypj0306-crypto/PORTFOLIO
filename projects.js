document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const closeBtn = document.querySelector(".close-btn");

  // 🔹 Open modal when video button is clicked
  document.querySelectorAll(".video-button").forEach(button => {
    button.addEventListener("click", (e) => {
      const videoSrc = button.getAttribute("data-video");

      // Ripple effect positioning (like React version with --x, --y)
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);

      modal.style.display = "block";
      modalVideo.src = videoSrc;
      modalVideo.play();
    });
  });

  // 🔹 Close modal on X button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
  });

  // 🔹 Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      modalVideo.pause();
      modalVideo.src = "";
    }
  });
});
