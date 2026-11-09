const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const service = String(form.get("service") || "").trim();
  const message = String(form.get("message") || "").trim();

  // Replace this address with your own business email before publishing.
  const businessEmail = "YOUR-EMAIL@example.com";
  const subject = encodeURIComponent(`Service enquiry: ${service}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
  );

  if (businessEmail === "YOUR-EMAIL@example.com") {
    alert("Website demo is working. First replace YOUR-EMAIL@example.com in script.js with your business email.");
    return;
  }
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
