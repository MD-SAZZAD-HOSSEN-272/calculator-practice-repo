const display = document.querySelector('#input')

document.querySelector(".keys").addEventListener("click", e => {
    if (e.target.value === "=") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error"
        }
    }
    else if (e.target.value === "ac") {
        display.value = "";
    }
    else if (e.target.value === "d") {
        display.value = display.value.slice(0, -1)
    }
    else if (e.target.value === "%") {
        display.value = parseFloat(display.value) / 100;
    }
    else {
        display.value += e.target.value;
    }
})


// function button (click) {
//     display.value += click;
// }
// function allClear () {
//     display.value = '';
// }
// function calculate () {
//     try {
//         display.value = eval (display.value);
//     }
//     catch (error) {
//         display.value = 'Error';
//     }
// }