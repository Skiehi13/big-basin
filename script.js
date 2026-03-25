const toggleBtn = document.getElementById("toggleDetails");
const detailsEl = document.getElementById("details");

// Toggle explanation panel
if (toggleBtn && detailsEl) {
  toggleBtn.addEventListener("click", () => {
    const isHidden = detailsEl.classList.toggle("hidden");
    toggleBtn.textContent = isHidden ? "Show details" : "Hide details";
  });
}
