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