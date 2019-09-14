console.log("entered");

var tasks = document.getElementsByClassName("tasks");

tasks.onClick(function(){
    var dropdown = document.getElementsByClassName("dropdown");
    dropdown.style.display = "block";
    console.log("hello");
});

var slideIndex = 1;

showSlides(slideIndex);

function plus(inc) {
    slideIndex = (slideIndex + inc);
    showSlides(slideIndex);
}

function openNav() {
    document.getElementById("mysidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mysidenav").style.width = "0px";
}

function showSlides(n) {
    slideIndex = n;

    if (slideIndex > 3) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = 3;
    }

    var slide = document.getElementsByClassName("mySlides");


    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[slideIndex - 1].style.display = "block";

}

function showSlides() {

    var slides = document.getElementsByClassName("mySlides");

    slideIndex++;

    if (slideIndex > 3) {
        slideIndex = 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2500);

}