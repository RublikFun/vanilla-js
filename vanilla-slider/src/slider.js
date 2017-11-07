let slideIndex = 1,
    prev = document.getElementsByClassName("v-prev")[0],
    next = document.getElementsByClassName("v-next")[0],
    slides = Array.prototype.slice.call(document.querySelectorAll('.vannilla-slider')[0].children),
    dots = Array.prototype.slice.call(document.querySelectorAll('.vanilla-slider-dots')[0].children),
    count = document.getElementsByClassName("count ")[0];

showSlides(slideIndex);

let plusSlides = (n) => showSlides(slideIndex += n);

let currentSlide = (n) => showSlides(slideIndex = n);

function showSlides(n) {
    var i;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) { slides[i].className = slides[i].className.replace("active", ""); }

    for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace("active", ""); }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    count.innerHTML = slideIndex + "/" + slides.length;
}

prev.onclick = () => plusSlides(-1);
next.onclick = () => plusSlides(1);
dots.forEach((dot, index) => dot.onclick = () => currentSlide(index + 1));