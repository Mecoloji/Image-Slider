const slides = document.querySelectorAll(".slide")
const next = document.querySelector("#next")
const prev = document.querySelector("#prev")

const auto = true;
const intervalTime = 3000;
let slideInterval;


const nextSlide = () => {
    const activeSlide = document.querySelector(".active");
    // Delete Active Class
    activeSlide.classList.remove("active")

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling
    if(activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add("active")
    }else {
        slides[0].classList.add("active")
    }
};

const prevSlide = () => {
    const activeSlide = document.querySelector(".active");
    // Delete Active Class
    activeSlide.classList.remove("active")

    if(activeSlide.previousElementSibling){
        activeSlide.previousElementSibling.classList.add("active")
    }else {
        slides[slides.length - 1].classList.add("active")
    }
};


next.addEventListener("click",() => {
    nextSlide();
    if(auto) {
        // https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});


prev.addEventListener("click",() => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});


// Auto Transition
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}