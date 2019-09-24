function checking() {

    var check_header = $("#check-header");
    var check_box = $(".check-entry");

    var count = 0;

    for (var i = 1; i < check_box.length; i++) {
        var box = check_box[i];

        if (box.checked)
            count++;
    }

    if (count == check_box.length - 1)
        check_header.prop('checked', true);
    else
        check_header.prop('checked', false);
}

function init() {

    $(".check-entry").click(() => {
        checking();
    });

    var check_header = $("#check-header");
    check_header.click(() => {
        setCheck(check_header.prop('checked'));
    });

    var search_box = $("#search-box");
    search_box.keyup(() => {

        var query = search_box.prop('value');

        highlight("transparent", "");

        if (query.toString() != "")
            highlight("blue", query);

    });

    $("#calculate").click(() => {
        calculate();
    });

}

function highlight(color, query) {
    var rows = $("td");

    for (var i = 0; i < rows.length; i++) {
        var td = rows[i];

        if (td.innerText.search(query) >= 0)
            td.style.backgroundColor = color;

    }
}

function setCheck(flag) {

    var check = $(".check-entry");

    for (var i = 0; i < check.length; i++) {
        check[i].checked = flag;
    }
}

setTimeout(() => {
    checking();
    init();
}, 100);

function calculate() {

    var table = $("td");

    var entries = $("tr").length - 1;

    var max = 0;

    var sum = 0;

    for (var i = 3; i < table.length; i += 5) {

        var score = parseInt(table[i].innerText, 10);

        if (score > max)
            max = score;

        sum = sum + score;

    }

    var average = sum / entries;

    $("#average")[0].innerText = "Average : " + average;
    $("#max")[0].innerText = "Max : " + max;

}