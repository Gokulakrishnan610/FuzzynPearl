// ====== EDIT THESE ======
const WHATSAPP_NUMBER = "919999999999"; // country code + number, no + or spaces
const INSTAGRAM_HANDLE = "yourhandle"; // without the @
// ========================

const form = document.getElementById("orderForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const lines = [
    `Hi! I'd like to order from Fuzzy & Pearl.`,
    `Name: ${d.get("name")}`,
    `Item: ${d.get("item")}`,
    d.get("when") ? `Occasion / date: ${d.get("when")}` : "",
    d.get("notes") ? `Ideas: ${d.get("notes")}` : "",
  ].filter(Boolean);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
});

// "Ask about this one" pre-selects the item in the form
document.querySelectorAll("[data-item]").forEach((a) =>
  a.addEventListener("click", () => { form.elements.item.value = a.dataset.item; })
);

// Tapping an occasion jumps to the form with it filled in
document.querySelectorAll("[data-occ]").forEach((a) =>
  a.addEventListener("click", () => { form.elements.when.value = a.dataset.occ + ", "; })
);

// Floating button: opens WhatsApp directly once the number is set
const wa = document.getElementById("waFloat");
if (!WHATSAPP_NUMBER.startsWith("9999999")) wa.href = `https://wa.me/${WHATSAPP_NUMBER}`;

// Instagram handle: fills every link and label on the page
document.querySelectorAll("[data-ig]").forEach((a) => (a.href = `https://instagram.com/${INSTAGRAM_HANDLE}`));
document.querySelectorAll("[data-ig-text]").forEach((t) => (t.textContent = `@${INSTAGRAM_HANDLE}`));
