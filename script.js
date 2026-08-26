document.addEventListener("DOMContentLoaded", () => {
  // 1. FILTRARE TAB-URI PE INDEX
  const tabButtons = document.querySelectorAll(".tab-btn");
  const productCards = document.querySelectorAll(".product-card");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");

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

  // 2. FILTRARE SIDEBAR PE PAGINA PRODUSE.HTML
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  const shopCards = document.querySelectorAll(".shop-card");
  const categoryTitle = document.getElementById("page-category-title");
  const categoryBreadcrumb = document.getElementById("current-category-breadcrumb");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      sidebarLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      const selectedCat = link.getAttribute("data-cat");
      const catName = link.textContent;

      if (categoryTitle) categoryTitle.textContent = catName;
      if (categoryBreadcrumb) categoryBreadcrumb.textContent = catName;

      shopCards.forEach((card) => {
        if (card.getAttribute("data-cat") === selectedCat) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 3. MODAL COMANDĂ
  const modal = document.getElementById("orderModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");

  const openModal = () => modal && modal.classList.add("active");
  const closeModal = () => modal && modal.classList.remove("active");

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
