let slots = document.querySelectorAll(".slot");

slots.forEach(function(cell) {

    cell.addEventListener("click", function() {

        let day = this.dataset.day;
        let time = this.dataset.time;
        let subject = this.dataset.subject;

        alert(
            "Day: " + day +
            "\nTime: " + time +
            "\nSubject: " + subject
        );

    });

});







// Cyber Security
// Machine Learning
// Artificial Intelligence
// Data Science
// // Object Oriented Programming








