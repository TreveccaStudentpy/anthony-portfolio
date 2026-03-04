// Fade-in on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));


// Mobile nav toggle (matches your HTML: .navbtn + .navlinks)
(() => {
  const navBtn = document.querySelector(".navbtn");
  const navLinks = document.querySelector(".navlinks");

  if (!navBtn || !navLinks) return;

  navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu after clicking a link (mobile UX)
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // Close if user taps outside the menu
  document.addEventListener("click", (e) => {
    const inside = navBtn.contains(e.target) || navLinks.contains(e.target);
    if (!inside) navLinks.classList.remove("open");
  });
})();

// Scroll progress bar
const bar = document.querySelector(".scrollbar");
if (bar) {
  const updateBar = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const progress = height > 0 ? (scrollTop / height) * 100 : 0;
    bar.style.width = progress + "%";
  };

  window.addEventListener("scroll", updateBar, { passive: true });
  window.addEventListener("resize", updateBar);
  updateBar();
}