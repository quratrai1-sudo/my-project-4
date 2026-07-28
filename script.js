document.addEventListener("DOMContentLoaded", () => {
  // 1. Responsive Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close nav on link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // 2. Dark/Light Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.body.removeAttribute("data-theme");
      themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
      document.body.setAttribute("data-theme", "dark");
      themeIcon.classList.replace("fa-moon", "fa-sun");
    }
  });

  // 3. Menu Real-time Search
  const searchInput = document.getElementById("menu-search");
  const menuCards = document.querySelectorAll(".menu-card");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    menuCards.forEach((card) => {
      const name = card.getAttribute("data-name");
      if (name.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // 4. Table Reservation Validation & Handling
  const resForm = document.getElementById("reservation-form");
  resForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const phone = document.getElementById("res-phone").value.trim();
    const phoneRegex = /^03\d{9}$/;

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid Pakistani phone number starting with 03 (11 digits e.g., 03001234567).");
      return;
    }

    alert("Thank you! Your table reservation request has been submitted successfully.");
    resForm.reset();
  });

  // 5. Image Gallery Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      galleryItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 6. Review Slider
  const slides = document.querySelectorAll(".review-slide");
  const prevBtn = document.getElementById("prev-review");
  const nextBtn = document.getElementById("next-review");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // 7. Scroll-To-Top Button
  const scrollTopBtn = document.getElementById("scroll-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
