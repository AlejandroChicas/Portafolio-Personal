// Simulación de envío de formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-contacto");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarme! Te responderé pronto.");
    form.reset();
  });
});


