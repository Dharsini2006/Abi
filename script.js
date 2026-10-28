const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copyEmail").addEventListener("click", async () => {
  const email = "dharsini9626@gmail.com";
  const status = document.getElementById("copyStatus");
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = "Email address copied!";
  } catch (error) {
    status.textContent = "Email: " + email;
  }
});
