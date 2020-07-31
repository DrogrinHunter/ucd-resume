function sendMail(contactForm) {
    emailjs.send("gmail", "luke_willmore", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,
    })

.then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}

function submitForm() {
    alert("Thank you for submitting your request, someone will get back to you as soon as possible.");
}

