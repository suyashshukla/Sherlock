setTimeout(() => {
    trigger();
}, 100);

function openLightBox() {

    console.log("hello");
    var box = document.getElementById("content-add-address");
    box.style.display = "block";

}

function closeLightBox() {

    var box = document.getElementById("content-add-address");
    box.style.display = "none";

}

function trigger() {}