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

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const contato = document.getElementById("contato").value.trim();
    const motivo = document.getElementById("motivo").value.trim();

    const apenasNumeros = /^[0-9]+$/;

    if (!nome || !cpf || !contato || !motivo) {
      alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    if (!apenasNumeros.test(cpf) || cpf.length !== 11) {
      alert("🧾 O CPF deve conter exatamente 11 números.");
      return;
    }

    if (!apenasNumeros.test(contato) || contato.length < 8) {
      alert("📞 O número de contato deve conter ao menos 8 números.");
      return;
    }

    alert("✅ Mensagem enviada com sucesso!");
    form.reset();
  });