// Logo
const logo = document.getElementById('logo');
const logoIcon = logo.querySelector('.fg-location-arrow');

logo.addEventListener('mouseover', () => {
  logoIcon.classList.add('animate');
  logoIcon.addEventListener('animationend', () => {
    logoIcon.classList.remove('animate');
  }, { once: true });
});
// --------------------------------------------------

// Show button when user scrolls down 600px from top of document
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.onscroll = () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top when clicked
scrollToTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox
    document.body.scrollTop = 0; // For Safari
});
// --------------------------------------------------

