const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Thank you! Your enquiry has been recorded. Connect this form to your email/CRM before publishing.";
  event.target.reset();
});
