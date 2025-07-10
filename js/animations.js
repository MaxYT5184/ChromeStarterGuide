document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  const slideUpElements = document.querySelectorAll(".slide-up");

  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
      el.style.opacity = 1;
    }, 300);
  });

  slideUpElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 300);
  });
});
