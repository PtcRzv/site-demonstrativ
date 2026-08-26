document.addEventListener("DOMContentLoaded", () => {
  // 1. FILTRARE CATEGORII (TAB-URI)
  const tabButtons = document.querySelectorAll(".tab-btn");
  const productCards = document.querySelectorAll(".product-card");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Schimbă starea butonului activ
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      // Arată/ascunde produsele corespunzătoare
      productCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // 2. MODAL COMANDĂ
  const modal = document.getElementById("orderModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");

  const openModal = () => modal.classList.add("active");
  const closeModal = () => modal.classList.remove("active");

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Închide modalul dacă se dă click în afara lui
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
