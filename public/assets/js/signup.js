$(document).ready(function () {
    // Getting references to our form and input
    var signUpForm = $("#sign-up");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("click", function (event) {
        var emailInput = $("#email");
        var passwordInput = $("#password");
        var name = $("#name");

        event.preventDefault();
        var userData = {
            name: name.val(),
            email: emailInput.val(),
            password: passwordInput.val()
        };
        console.log(userData);

        if (!userData.email || !userData.password || !userData.name) {
            alert("complete form")
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData);
        emailInput.val("");
        passwordInput.val("");


    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userData) {
        $.post("/api/signup", userData, function (data) {

        })
            .then(function (data) {
                window.location.replace("/carchoice");
                // If there's an error, handle it by throwing up a bootstrap alert
            })

    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
