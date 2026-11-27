document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const siteNav = document.querySelector(".site-nav");

  if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
      const menuIsOpen = siteNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", menuIsOpen);
    });
  }

  document
    .querySelectorAll(".home-slider, .slider-section")
    .forEach((sliderSection) => {
      const slides = sliderSection.querySelectorAll(".slide");
      const dots = sliderSection.querySelectorAll("[data-slide]");
      const previousButton = sliderSection.querySelector("[data-prev]");
      const nextButton = sliderSection.querySelector("[data-next]");

      if (slides.length === 0) return;

      let activeSlide = 0;

      function showSlide(index) {
        activeSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
          slide.classList.toggle("is-active", slideIndex === activeSlide);
        });

        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("is-active", dotIndex === activeSlide);
        });
      }

      previousButton?.addEventListener("click", () => {
        showSlide(activeSlide - 1);
      });

      nextButton?.addEventListener("click", () => {
        showSlide(activeSlide + 1);
      });

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
      });

      showSlide(activeSlide);
    });
});

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
/* ===== PRODUCTS PAGE ===== */
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
