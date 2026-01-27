function checkName() {
    let name = document.getElementById("name").value.trim();
    let dateField = document.getElementById("date");
    
    if (name !== "") {
        dateField.classList.remove("hidden");
    } else {
        dateField.classList.add("hidden");
        document.getElementById("subject").classList.add("hidden");
        document.getElementById("email").classList.add("hidden");
        document.getElementById("grade").classList.add("hidden");
        document.querySelector("button").classList.add("hidden");
    }
}

function checkDate() {
    let date = document.getElementById("date").value;
    let subjectField = document.getElementById("subject");
    
    if (date !== "") {
        subjectField.classList.remove("hidden");
    } else {
        subjectField.classList.add("hidden");
        document.getElementById("email").classList.add("hidden");
        document.getElementById("grade").classList.add("hidden");
        document.querySelector("button").classList.add("hidden");
    }
}

function checkSubject() {
    let subject = document.getElementById("subject").value;
    let emailField = document.getElementById("email");
    
    if (subject !== "") {
        emailField.classList.remove("hidden");
    } else {
        emailField.classList.add("hidden");
        document.getElementById("grade").classList.add("hidden");
        document.querySelector("button").classList.add("hidden");
    }
}

function checkEmail() {
    let email = document.getElementById("email").value.trim();
    let gradeField = document.getElementById("grade");
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email !== "" && emailPattern.test(email)) {
        gradeField.classList.remove("hidden");
    } else {
        gradeField.classList.add("hidden");
        document.querySelector("button").classList.add("hidden");
    }
}

function checkGrade() {
    let grade = document.getElementById("grade").value;
    let submitButton = document.querySelector("button");
    
    if (grade !== "") {
        submitButton.classList.remove("hidden");
    } else {
        submitButton.classList.add("hidden");
    }
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let date = document.getElementById("date").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value.trim();
    let grade = document.getElementById("grade").value;

    if (name === "" || date === "" || subject === "" || email === "" || grade === "") {
        alert("Please fill in all fields.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100.");
        return false;
    }

    return true;
}