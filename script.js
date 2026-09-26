// ========================================
// EXUS WEB
// ========================================

"use strict";


// ========================================
// CONFIGURACIÓN DE WHATSAPP
// ========================================

// Número de WhatsApp de EXUS WEB
// Formato Colombia:
// 573001234567

const WHATSAPP = "573219272643";


// ========================================
// MENSAJE AUTOMÁTICO GENERAL
// ========================================

const message = encodeURIComponent(
  "Hola EXUS WEB 👋 Quiero una página web para mi negocio. Me gustaría recibir información."
);


// ========================================
// BOTÓN PRINCIPAL DE WHATSAPP
// ========================================

const wa = document.getElementById("waBtn");

if (wa) {
  wa.href = `https://wa.me/${WHATSAPP}?text=${message}`;
}


// ========================================
// MENÚ PARA CELULAR
// ========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

if (menuBtn && nav) {

  menuBtn.addEventListener("click", () => {

    const visible = nav.style.display === "flex";

    if (visible) {

      // Ocultar menú
      nav.style.display = "";

    } else {

      // Mostrar menú
      nav.style.display = "flex";
      nav.style.position = "absolute";
      nav.style.top = "76px";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.padding = "22px";
      nav.style.background = "#080a0a";
      nav.style.flexDirection = "column";
      nav.style.borderBottom = "1px solid #222a25";

    }

  });


  // ========================================
  // CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
  // ========================================

  nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      if (window.innerWidth <= 850) {
        nav.style.display = "";
      }

    });

  });


  // ========================================
  // CERRAR MENÚ SI LA VENTANA VUELVE A SER GRANDE
  // ========================================

  window.addEventListener("resize", () => {

    if (window.innerWidth > 850) {
      nav.style.display = "";
      nav.style.position = "";
      nav.style.top = "";
      nav.style.left = "";
      nav.style.right = "";
      nav.style.padding = "";
      nav.style.background = "";
      nav.style.flexDirection = "";
      nav.style.borderBottom = "";
    }

  });

}


// ========================================
// BOTONES DE WHATSAPP DE LOS PLANES
// ========================================

// PLAN BÁSICO
const basicBtn = document.getElementById("basicBtn");

if (basicBtn) {

  const basicMessage = encodeURIComponent(
    "Hola EXUS WEB 👋 Estoy interesado en el PLAN BÁSICO de $99.000 COP. Quiero recibir más información."
  );

  basicBtn.href = `https://wa.me/${WHATSAPP}?text=${basicMessage}`;

}


// ========================================
// PLAN PROFESIONAL
// ========================================

const professionalBtn = document.getElementById("professionalBtn");

if (professionalBtn) {

  const professionalMessage = encodeURIComponent(
    "Hola EXUS WEB 👋 Estoy interesado en el PLAN PROFESIONAL de $189.000 COP. Quiero recibir más información."
  );

  professionalBtn.href = `https://wa.me/${WHATSAPP}?text=${professionalMessage}`;

}


// ========================================
// PLAN TIENDA ONLINE
// ========================================

const storeBtn = document.getElementById("storeBtn");

if (storeBtn) {

  const storeMessage = encodeURIComponent(
    "Hola EXUS WEB 👋 Estoy interesado en el PLAN TIENDA ONLINE de $399.000 COP. Quiero recibir más información."
  );

  storeBtn.href = `https://wa.me/${WHATSAPP}?text=${storeMessage}`;

}


// ========================================
// ANIMACIÓN SUAVE AL HACER SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ========================================
// MENSAJE EN CONSOLA
// ========================================

console.log("🚀 EXUS WEB iniciado correctamente.");
console.log("📱 WhatsApp configurado:", WHATSAPP);