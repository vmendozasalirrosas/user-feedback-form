document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const inputs = form.querySelectorAll("input, textarea");
  const feedbackDisplay = document.getElementById("feedback-display");
  const charCounter = document.querySelector(".char-counter");

  form.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      const tooltip = e.target.nextElementSibling;
      if (tooltip?.classList.contains("tooltip")) {
        tooltip.style.display = "block";
      }
    }
  });

  form.addEventListener("mouseout", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      const tooltip = e.target.nextElementSibling;
      if (tooltip?.classList.contains("tooltip")) {
        tooltip.style.display = "none";
      }
    }
  });

  document.getElementById("comments").addEventListener("input", (e) => {
    const length = e.target.value.length;
    charCounter.textContent = `${length} / 200`;
    if (length > 200) {
      e.target.value = e.target.value.slice(0, 200);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comments = document.getElementById("comments").value.trim();

    if (!name || !email || !comments) {
      alert("Please fill out all fields.");
      return;
    }

    const entry = document.createElement("p");
    entry.textContent = `"${comments}" — ${name}`;
    feedbackDisplay.appendChild(entry);

    form.reset();
    charCounter.textContent = "0 / 200";
  });
});
