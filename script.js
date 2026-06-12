document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Fixed password
    let correctPassword = "123456";

    if(password === correctPassword){
        localStorage.setItem("userEmail", email);
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Password!");
    }
});
