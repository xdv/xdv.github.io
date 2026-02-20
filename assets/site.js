(() => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || nodes.length === 0) {
    nodes.forEach((n) => n.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  nodes.forEach((n) => observer.observe(n));
})();
