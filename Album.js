let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const galleryModal = document.getElementById("galleryModal");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function prevSlide() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
}

function openGallery() {
  galleryModal.style.display = "flex";
  showSlide(currentIndex);
}

function closeGallery() {
  galleryModal.style.display = "none";
}

// Initialize first slide
showSlide(currentIndex);
