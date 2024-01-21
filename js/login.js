// Add click Event Handler With The Submit Button

document.getElementById('btn-sumbit').addEventListener('click', function(){
    // Get the email address to the email field
    // Always Remeber to use .value to get text form an input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    console.log(email);

    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    console.log(password);

    // verify email and  passowrd
    if(email === "abdul@gmail.com" && password === "Abdul") {
        window.location.href = "bank.html";
    }
    else {
        alert("Inter Valid information");
    }

})