/*
    W kilku miejscach się spacje niezgadzają
*/

 document.addEventListener("DOMContentLoaded", function() {
 /*
    Jak querySelector to szukałbym po ID bo powinno być unikalne
    querySelectorAll po klasie.
 */
 // slider
 const slider = document.querySelector(".slider");
    const sliderStage = document.querySelector(".slider-stage");
    const slides = document.querySelectorAll(".slider li");
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");

    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    let slidesNumber = slides.length - 1;

   function goToSlide(index) {

        if (index < 0) {
            index = slidesNumber;
        } else if (index > slidesNumber) {
            index = 0;
        }

        slider.style.left = index * (-slideWidth) + "px";
        currentIndex = index;
        }

    function slideToNext () {
       goToSlide(currentIndex + 1);
    }

    function slideToPrev () {
       goToSlide(currentIndex - 1);
    }

    prev.addEventListener("click", slideToPrev);
    next.addEventListener("click", slideToNext);
    setInterval(slideToNext, 4000);

    // read more-less
    const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn");

    function showHideText() {
        const siblingText = this.previousElementSibling;

        if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Czytaj wiecej";
        }
    }

    /*
        Ten for można zastąpić czymś takim:
        readMoreLessBtns.forEach((item) => {
            item.addEventListener("click", showHideText)
        })
        ale to drobnostka
    */
    for (let i = 0; i < readMoreLessBtns.length; i++) {
        readMoreLessBtns[i].addEventListener("click", showHideText);
    }

    // go-up button

    const goUpBtn = document.querySelector(".go-up i");

    goUpBtn.addEventListener("click", function() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});