// /* ----- BASE ------ */
// "use strict";

// // get required selectors to maniplute menu toggle
// const navbar = document.querySelector(".navbar");
// const menuTogglersContainer = document.querySelector(".menu-togglers");
// const bxMenu = document.querySelector(".bx-menu");

// /* -- show/hide menu -- */
// menuTogglersContainer.addEventListener("click", () => {
//   // if navbar tag have show-nav in as class
//   navbar.classList.toggle("show-nav");
// });

// /* ================================================ */

// /* -------- theme changing -------- */
// const themeTogglers = document.querySelector(".theme-togglers");
// const lightIcon = document.querySelector(".bxs-sun");
// const darkIcon = document.querySelector(".bxs-moon");

// var lightmode = localStorage.getItem("lightmode");

// // enable dark mode function
// const enableLightMode = () => {
//   // add class dark mode to the body
//   document.body.classList.add("lightmode");
//   localStorage.setItem("lightmode", "enabled");
//   // change theme toggle styles
//   lightIcon.style.display = "none";
//   darkIcon.style.display = "block";
// };

// if (lightmode && lightmode === "enabled") {
//   enableLightMode();
// }

// // disable dark mode function
// const disableLightMode = () => {
//   // remove class dark mode from the body
//   document.body.classList.remove("lightmode");
//   localStorage.setItem("lightmode", null);
//   // change theme toggle styles
//   lightIcon.style.display = "block";
//   darkIcon.style.display = "none";
// };

// // active/deactive dark mode
// themeTogglers.addEventListener("click", () => {
//   lightmode = localStorage.getItem("lightmode");
//   if (!lightmode || lightmode !== "enabled") {
//     enableLightMode();
//   } else {
//     disableLightMode();
//   }
// });


// /* -- hide show hero buttons -- */
// // delay before showing them
// const heroButtonsContainer = document.querySelector(".hero-btns-container");

// var delayTime = 1000;

// heroButtonsContainer.style.transition = "opacity 1000ms";

// setTimeout(() => {
//   heroButtonsContainer.style.opacity = 1;
// }, delayTime);

// // --- prevent form submission on contact section ---
// const sendMsgButton = document.querySelector(".send-msg-btn");
// sendMsgButton.addEventListener("click", (e) => {
//   e.preventDefault();
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const navbar = document.querySelector("header");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) { // Adjust the value for when the navbar should change
//       navbar.classList.add("scrolled");
//     } else {
//       navbar.classList.remove("scrolled");
//     }
//   });
// });

/* ----- BASE ------ */
"use strict";

// get required selectors to manipulate menu toggle
const navbar = document.querySelector(".navbar");
const menuTogglersContainer = document.querySelector(".menu-togglers");
const bxMenu = document.querySelector(".bx-menu");

/* -- show/hide menu -- */
menuTogglersContainer.addEventListener("click", () => {
  // if navbar tag has show-nav as class
  navbar.classList.toggle("show-nav");
});

/* ================================================ */

/* -------- theme changing -------- */
const themeTogglers = document.querySelector(".theme-togglers");
const lightIcon = document.querySelector(".bxs-sun");
const darkIcon = document.querySelector(".bxs-moon");

var lightmode = localStorage.getItem("lightmode");

// enable dark mode function
const enableLightMode = () => {
  // add class dark mode to the body
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "enabled");
  // change theme toggle styles
  lightIcon.style.display = "none";
  darkIcon.style.display = "block";
};

if (lightmode && lightmode === "enabled") {
  enableLightMode();
}

// disable dark mode function
const disableLightMode = () => {
  // remove class dark mode from the body
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
  // change theme toggle styles
  lightIcon.style.display = "block";
  darkIcon.style.display = "none";
};

// active/deactivate dark mode
themeTogglers.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  if (!lightmode || lightmode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

/* -- hide/show hero buttons -- */
// delay before showing them
const heroButtonsContainer = document.querySelector(".hero-btns-container");

var delayTime = 1000;

heroButtonsContainer.style.transition = "opacity 1000ms";

setTimeout(() => {
  heroButtonsContainer.style.opacity = 1;
}, delayTime);

// --- prevent form submission on contact section ---
const sendMsgButton = document.querySelector(".send-msg-btn");
sendMsgButton.addEventListener("click", (e) => {
  e.preventDefault();
});

/* -------- dynamic navbar color change on scroll -------- */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // Adjust the value for when the navbar should change
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
