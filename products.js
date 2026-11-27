document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const productCards = document.querySelectorAll(".product-card");

  function filterProducts(category) {
    productCards.forEach((card) => {
      card.hidden = !(category === "all" || card.dataset.category === category);
    });
    filterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filter === category);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () =>
      filterProducts(button.dataset.filter),
    );
  });

  const params = new URLSearchParams(window.location.search);
  filterProducts(params.get("category") || "all");
});
