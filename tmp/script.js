function unCheck() {
    var list = document.getElementsByClassName("radio");
    for (let index = 0; index < list.length; index++) {
        list[index].checked = false;
    }
}

function voila() {
    var dir = false;
    var ans;
    var list = document.getElementsByClassName("radio");
    var field = document.getElementById("txt");
    var result = document.getElementById("res-txt");
    for (let index = 0; index < list.length; index++) {
        if (list[index].checked === true) {
            dir = true;
            ans = list[index].value;
            break;
        }
    }

    if (dir === false) {
        ans = field.value;
    }

    result.innerHTML = ans;
    dir = false;
}
