function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }


// contenido.js
document.getElementById("contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    Swal.fire({
      title: "Campos incompletos",
      text: "Por favor llena todos los campos antes de enviar el formulario.",
      icon: "error",
      confirmButtonText: "Entendido"
    });
  } else {
    Swal.fire({
      title: "¡Mensaje enviado!",
      text: "Gracias por contactarnos, te responderemos pronto.",
      icon: "success",
      confirmButtonText: "Aceptar"
    });

    // Opcional: limpiar el formulario
    document.getElementById("contacto").reset();
  }
});

// Animación tipo fade-in al hacer scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => observer.observe(card));


