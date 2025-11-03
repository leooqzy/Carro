const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");
  observer.observe(sec);
});

const cta = document.querySelector("header button");
if (cta) {
  cta.addEventListener("mouseenter", () => {
    cta.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.05)" }, { transform: "scale(1)" }],
      { duration: 300 }
    );
  });
}