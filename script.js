var bill_error = document.getElementById("bill-error");
var bill_amount = document.getElementById("amount");
var select_list = document.getElementsByClassName("radio");
var custom_select = document.getElementById("custom");
var num_error = document.getElementById("num-error");
var num_people = document.getElementById("number");
var tip_amount = document.getElementById("tip-amount");
var total_amount = document.getElementById("total-amount");
var reset = document.getElementById("reset");
var calc_tip = 0.0;
var selected_ratio, total_bill, total_tip;

function unCheck() {
    for (let index = 0; index < select_list.length; index++) {
        select_list[index].checked = false;
    }
}

bill_amount.addEventListener("input", function (event) {
    if (Number(this.value) <= 0) {
        bill_error.innerHTML = "Can't be 0";
        bill_amount.style.outline = "2px solid red";
    } else {
        enableButton();
        calculateTip();
        bill_error.innerHTML = "";
        bill_amount.style.outline = "";
    }
    //bill_error.innerHTML = this.value === 0;
});

bill_amount.addEventListener("input", calculateTip());
//num_people.addEventListener("input", calculateTotal());

num_people.addEventListener("input", function (event) {
    if (Number(this.value) <= 0) {
        num_error.innerHTML = "Can't be 0";
        num_people.style.outline = "2px solid red";
    } else {
        enableButton();
        //calculate();
        num_error.innerHTML = "";
        num_people.style.outline = "";
    }
});

function enableButton() {
    reset.classList.remove("btnDisabled");
}

function disableButton() {
    reset.classList.add("btnDisabled");
}

function calculateTip() {
    for (let index = 0; index < select_list.length; index++) {
        if (select_list[index].checked === true) {
            selected_ratio = select_list[index].value;
            break;
        } else {
            selected_ratio = Number(custom_select.value) / 100;
        }
    }

    if (validate()) {
        total_tip = Number(bill_amount.value) * Number(selected_ratio);
        calc_tip = total_tip / Number(num_people.value);
        total_bill = total_tip + Number(bill_amount.value);
        total_bill /= Number(num_people.value);
        tip_amount.innerHTML = "$" + calc_tip.toFixed(2);
        total_amount.innerHTML = "$" + total_bill.toFixed(2);
    } else {
        tip_amount.innerHTML = "$0.00";
        total_amount.innerHTML = "$0.00";
    }
}

function validate() {
    if (Number(bill_amount.value) > 0 && Number(num_people.value) > 0) {
        return true;
    } else {
        return false;
    }
}

function resetValues() {
    disableButton();
    unCheck();
    bill_amount.value = "";
    num_people.value = "";
    tip_amount.innerHTML = "$0.00";
    total_amount.innerHTML = "$0.00";
}
