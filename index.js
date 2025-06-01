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

/* .card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
        }

        .card.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
*/

function mostrarInfo(tipo) {
  let titulo = '';
  let texto = '';
  let imagen = '';

  switch (tipo) {
    case 'solar':
      titulo = 'Energía Solar';
      texto = 'Ofrecemos instalación profesional de paneles solares con tecnología de punta, ideales para reducir tu huella de carbono y ahorrar en tu factura de electricidad.';
      imagen = 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      break;
    case 'domotica':
      titulo = 'Domótica Ecológica';
      texto = 'Automatiza tu hogar u oficina con sistemas inteligentes que te ayudan a controlar el consumo energético de manera eficiente y sostenible.';
      imagen = 'https://images.unsplash.com/photo-1681263849578-7585abbe0455?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      break;
    case 'consultoria':
      titulo = 'Consultoría Verde';
      texto = 'Te brindamos asesoría personalizada para transformar tus procesos tecnológicos hacia un modelo más sostenible y respetuoso con el medio ambiente.';
      imagen = 'https://www.unir.net/wp-content/uploads/2021/11/cabecera-ambiente-min-1.jpg';
      break;
  }

  Swal.fire({
    title: titulo,
    text: texto,
    imageUrl: imagen,
    imageWidth: 500,
    imageAlt: titulo,
    confirmButtonText: 'Cerrar',
    confirmButtonColor: '#198754'
  });
}

