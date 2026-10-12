function throttle(callbackFunction, delayTime) {

    let canExecute = true;

    return function () {

        if (!canExecute) {
            return;
        }

        callbackFunction();

        canExecute = false;

        setTimeout(function () {
            canExecute = true;
        }, delayTime);
    };
}

function displayMessage() {
    console.log("Button Clicked:", new Date().toLocaleTimeString());
}

let throttledClick = throttle(displayMessage, 2000);

document
    .getElementById("throttleButton")
    .addEventListener("click", throttledClick);






function debounce(callbackFunction, delayTime) {

    let timerId;

    return function () {

        clearTimeout(timerId);

        timerId = setTimeout(function () {
            callbackFunction();
        }, delayTime);
    };
}

function searchData() {
    console.log("Searching:", new Date().toLocaleTimeString());
}

let debouncedSearch = debounce(searchData, 2000);

document
    .getElementById("searchBox")
    .addEventListener("keyup", debouncedSearch);







let taskPromise = new Promise(function (resolve, reject) {

    let taskCompleted = true;

    if (taskCompleted) {
        resolve("Task Completed Successfully");
    } else {
        reject("Task Failed");
    }
});

taskPromise
    .then(function (resultMessage) {
        console.log(resultMessage);
    })
    .catch(function (errorMessage) {
        console.log(errorMessage);
    });





let examResultPromise = new Promise(function (resolve, reject) {

    let scoreValue = 25;

    if (scoreValue >= 35) {
        resolve("Pass");
    } else {
        reject("Fail");
    }

});

examResultPromise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (failureMessage) {
        console.log(failureMessage);
    });







