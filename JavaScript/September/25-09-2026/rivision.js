let taskListElement =
    document.getElementById("taskContainer");

console.log(taskListElement.parentElement);
console.log(taskListElement.children);
console.log(taskListElement.firstElementChild);
console.log(taskListElement.lastElementChild);



document
.getElementById("addTaskButton")
.addEventListener("click", function () {

    let newTaskElement =
        document.createElement("li");

    newTaskElement.textContent =
        "JavaScript";

    taskListElement.appendChild(
        newTaskElement
    );
});



taskListElement.addEventListener(
    "click",
    function (eventObject) {

        if (
            eventObject.target.tagName === "LI"
        ) {
            alert(
                "Clicked : "
                + eventObject.target.textContent
            );
        }
    }
);



document.body.addEventListener(
    "click",
    function () {
        console.log("Body Bubbling");
    }
);



document.body.addEventListener(
    "click",
    function () {
        console.log("Body Capturing");
    },
    true
);



function displayResult(callbackFunction) {

    console.log("Processing...");

    callbackFunction();
}

function showSuccessMessage() {

    console.log("Callback Executed");
}

displayResult(showSuccessMessage);



let welcomeTimer = setTimeout(
    function () {

        console.log(
            "Welcome After 5 Seconds"
        );

    },
    5000
);

// Cancel timeout
clearTimeout(welcomeTimer);



let clockInterval;

document
.getElementById("startTimerButton")
.addEventListener(
    "click",
    function () {

        clockInterval =
            setInterval(function () {

                console.log(
                    new Date()
                    .toLocaleTimeString()
                );

            }, 1000);
    }
);

document
.getElementById("stopTimerButton")
.addEventListener(
    "click",
    function () {

        clearInterval(clockInterval);

        console.log(
            "Interval Stopped"
        );
    }
);



function throttle(
    callbackAction,
    delayValue
) {

    let allowExecution = true;

    return function () {

        if (!allowExecution) {
            return;
        }

        callbackAction();

        allowExecution = false;

        setTimeout(function () {

            allowExecution = true;

        }, delayValue);
    };
}

function throttleMessage() {

    console.log(
        "Throttle Executed"
    );
}

let throttledHandler =
    throttle(
        throttleMessage,
        2000
    );

document.addEventListener(
    "mousemove",
    throttledHandler
);



function debounce(
    callbackAction,
    delayValue
) {

    let debounceTimer;

    return function () {

        clearTimeout(
            debounceTimer
        );

        debounceTimer =
            setTimeout(
                callbackAction,
                delayValue
            );
    };
}

function searchProcess() {

    console.log(
        "Searching..."
    );
}

let debouncedHandler =
    debounce(
        searchProcess,
        1000
    );

document
.getElementById("searchInputBox")
.addEventListener(
    "keyup",
    debouncedHandler
);



console.log("Start");

setTimeout(function () {

    console.log(
        "Async Operation Completed"
    );

}, 2000);

console.log("End");
