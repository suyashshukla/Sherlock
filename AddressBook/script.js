setTimeout(() => {
    trigger();
}, 100);

function openLightBox() {

    console.log("hello");
    var box = document.getElementById("content-add-address");
    box.style.display = "block";

}

function closeLightBox() {

    var inputs = $("input");
    var address = $("textarea");

    // for (var i = 0; i < inputs.length; i++) {
    //     console.log(inputs[i].innerText);
    // }
    // console.log(address.prop("innerText"));

    var box = document.getElementById("content-add-address");
    // box.style.display = "none";

}

function trigger() {}