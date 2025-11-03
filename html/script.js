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

const toTop = document.getElementById("toTop");
if (toTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      toTop.classList.remove("hidden");
    } else {
      toTop.classList.add("hidden");
    }
  });

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("✅ Sua mensagem foi enviada com sucesso!");
    form.reset();
  });