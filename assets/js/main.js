const slider = document.querySelectorAll('.sliderImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(elemnt => elemnt.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function passSlide() {
    hideSlider();

    if(currentSlide === slider.length -1) {
        currentSlide = 0;
    } else {
        currentSlide ++;
    }
    showSlider();
}

function backSlide() {
    hideSlider();

    if(currentSlide === 0) {
        currentSlide = slider.length -1;
    } else {
        currentSlide --;
    }
    showSlider();
}

nextBtn.addEventListener('click', (e) => {
    e.preventDefault;
    passSlide();
});

prevBtn.addEventListener('click', (e) => {
    e.preventDefault;
    backSlide();
});