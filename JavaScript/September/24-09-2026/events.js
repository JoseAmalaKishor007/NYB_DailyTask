function throttle(callback1, delayTime) {

    let execute = true;

    return function () {

        if (!execute) {
            return;
        }

        callback1();

        execute = false;

        setTimeout(function () {
            execute = true;
        }, delayTime);
    };
}

function msg() {
    console.log("Button Clicked:", new Date().toLocaleTimeString());
}

let click = throttle(msg, 2000);

document
    .getElementById("throttleButton")
    .addEventListener("click", click);



function debounce(callback2, delayTime) {

    let timerId;

    return function () {

        clearTimeout(timerId);

        timerId = setTimeout(function () {
            callback2();
        }, delayTime);
    };
}

function searchData() {
    console.log("Searching:", new Date().toLocaleTimeString());
}

let debouncedSearch = debounce(searchData, 1000);

document
    .getElementById("searchBox")
    .addEventListener("keyup", debouncedSearch);



function res(total) {
    console.log("Total:", total);
}

function calculate(num1, num2, callback3) {
    let result = num1 + num2;

    callback3(result);
}

calculate(10, 20, res);


























