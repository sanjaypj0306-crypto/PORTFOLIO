// Handle "Say Hi" button click to open Gmail
document.addEventListener("DOMContentLoaded", () => {
  const sayHiBtn = document.getElementById("sayHiBtn");

  if (sayHiBtn) {
    sayHiBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=sanjaypj.0306@gmail.com",
        "_blank"
      );
    });
  }
});
