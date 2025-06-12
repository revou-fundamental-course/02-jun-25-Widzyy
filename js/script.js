// Home Setting
let currentIndex = 0;

// Show Slide
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === currentIndex) slide.classList.add('active');
  });
}

// Next Slide 
function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

// Previous Slide 
function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

// Auto Slide
let autoSlideInterval = setInterval(nextSlide, 4000);

// Pause auto slide ketika user hover tombol navigasi
document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav");
  navButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
    btn.addEventListener("mouseleave", () => {
      autoSlideInterval = setInterval(nextSlide, 4000);
    });
  });
});

// Animasi saat scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-slide").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

// Inisialisasi pertama
window.onload = () => {
  showSlide(currentIndex);
  document.dispatchEvent(new Event("scroll"));
};


// Animasi saat scroll - Our Profile
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const onScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});


// Form Submition Function - Start
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;

  const output = `
    <h3>Pesan Terkirim:</h3>
    <br>
    <p><strong>Nama:</strong> ${name}</p>
    <br>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <br>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <br>
    <p><strong>Pesan:</strong> ${message}</p>
    
  `;

  document.getElementById("output").innerHTML = output;
  document.getElementById("contactForm").reset();
});
// Form Submition Function - End
