const display = document.querySelector('#input')


function button (click) {
    display.value += click;
}
function allClear () {
    display.value = '';
}
function calculate () {
    try {
        display.value = eval (display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}