document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");

    let correctPassword = "123456";

    if(password === correctPassword){
        localStorage.setItem("userEmail", email);
        window.location.href = "dashboard.html";
    } else {
        errorMsg.innerHTML = "❌ Wrong Password";
    }
});
