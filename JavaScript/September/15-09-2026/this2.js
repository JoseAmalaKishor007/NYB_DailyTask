// call


let teacher = {
    teacherName: "Jose"
};

function displayTeacher(subjectName) {
    console.log(this.teacherName + " teaches " + subjectName);
}

displayTeacher.call(teacher, "JavaScript");



let playerInfo = {
    playerName: "Amala"
};

function showPlayer(gameName, levelNumber) {
    console.log(this.playerName + " plays " + gameName);
    console.log("Level:", levelNumber);
}

showPlayer.call(playerInfo, "Chess", 5);

// apply()

let emp = {
    empname: "Kishor"
};

function displayEmp(deptName, experienceYear) {
    console.log(this.empname);
    console.log(deptName);
    console.log(experienceYear);
}

displayEmp.apply(emp, ["Development", 3]);


let customerData = {
    customerName: "Amala"
};

function showCustomer(cityName, countryName) {
    console.log(this.customerName);
    console.log(cityName);
    console.log(countryName);
}

showCustomer.apply(customerData, ["Chennai", "India"]);














