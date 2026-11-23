const contrastButton = document.querySelector(".contrast-button");
const highContrastKey = "a11y-high-contrast";

if (contrastButton) {
  const savedPreference = sessionStorage.getItem(highContrastKey);

  if (savedPreference === "true") {
    document.body.classList.add("high-contrast");
    contrastButton.setAttribute("aria-pressed", "true");
  }

  contrastButton.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");

    const enabled = document.body.classList.contains("high-contrast");

    contrastButton.setAttribute("aria-pressed", String(enabled));
    sessionStorage.setItem(highContrastKey, String(enabled));
  });
}