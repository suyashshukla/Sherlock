setTimeout(() => {
    trigger();
    hover();
}, 100);

function trigger() {
    var active = $("#active");
    active[0].style.backgroundColor = "orange";
    active[0].style.borderColor = "white";
    active[0].style.borderWidth = "0 0 0 5px";
    active[0].style.borderStyle = "solid";
}

function hover() {

    var links = $("li");

    if (links[0].id != "active") {
        links[0].onmouseover = () => {
            links[0].style.backgroundColor = "orange";
            links[0].style.borderColor = "white";
            links[0].style.borderWidth = "0 0 0 5px";
            links[0].style.borderStyle = "solid";
        }


        links[0].onmouseout = () => {
            links[0].style.backgroundColor = "#323334";
            links[0].style.borderColor = "transparent";
            links[0].style.borderWidth = "0 0 0 5px";
            links[0].style.borderStyle = "solid";
        }
    }

    if (links[1].id != "active") {
        links[1].onmouseover = () => {
            links[1].style.backgroundColor = "orange";
            links[1].style.borderColor = "white";
            links[1].style.borderWidth = "0 0 0 5px";
            links[1].style.borderStyle = "solid";
        }


        links[1].onmouseout = () => {
            links[1].style.backgroundColor = "#323334";
            links[1].style.borderColor = "transparent";
            links[1].style.borderWidth = "0 0 0 5px";
            links[1].style.borderStyle = "solid";
        }
    }

    if (links[2].id != "active") {
        links[2].onmouseover = () => {
            links[2].style.backgroundColor = "orange";
            links[2].style.borderColor = "white";
            links[2].style.borderWidth = "0 0 0 5px";
            links[2].style.borderStyle = "solid";
        }


        links[2].onmouseout = () => {
            links[2].style.backgroundColor = "#323334";
            links[2].style.borderColor = "transparent";
            links[2].style.borderWidth = "0 0 0 5px";
            links[2].style.borderStyle = "solid";
        }
    }

    if (links[3].id != "active") {
        links[3].onmouseover = () => {
            links[3].style.backgroundColor = "orange";
            links[3].style.borderColor = "white";
            links[3].style.borderWidth = "0 0 0 5px";
            links[3].style.borderStyle = "solid";
        }


        links[3].onmouseout = () => {
            links[3].style.backgroundColor = "#323334";
            links[3].style.borderColor = "transparent";
            links[3].style.borderWidth = "0 0 0 5px";
            links[3].style.borderStyle = "solid";
        }
    }



}