const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const contentWrapper = document.getElementById('contentWrapper');
const navLinks = document.querySelectorAll('.nav-links a');

// Open sidebar
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
  contentWrapper.classList.add('shifted');
});

// Close sidebar
closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
  contentWrapper.classList.remove('shifted');
});

// Show section
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));

  const selected = document.getElementById(sectionId);
  if (selected) {
    selected.classList.add('active');
    selected.scrollIntoView({ behavior: 'smooth' }); // optional: scroll to top of section
  }

  // Highlight active nav link
  navLinks.forEach(link => link.classList.remove('active'));
  const activeLink = document.getElementById(`nav-${sectionId}`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Close sidebar on section click (for mobile UX)
  sidebar.classList.remove('active');
  contentWrapper.classList.remove('shifted');
}

  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000); // 5 seconds

  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    // Show after scrolling 300px
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  };

  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };SSS





document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#services .services-slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000); // change every 5s
});


