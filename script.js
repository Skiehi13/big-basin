// Character counter for blurb (to show it fits 50–140 chars)
const blurbEl = document.getElementById("blurb");
const charCountEl = document.getElementById("charCount");
const toggleBtn = document.getElementById("toggleDetails");
const detailsEl = document.getElementById("details");

function updateCharCount() {
  if (!blurbEl || !charCountEl) return;
  const text = blurbEl.textContent || "";
  const trimmed = text.trim();
  charCountEl.textContent = trimmed.length;
}

updateCharCount();

// Toggle explanation panel
if (toggleBtn && detailsEl) {
  toggleBtn.addEventListener("click", () => {
    const isHidden = detailsEl.classList.toggle("hidden");
    toggleBtn.textContent = isHidden ? "Show details" : "Hide details";
  });
}
