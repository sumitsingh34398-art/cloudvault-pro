document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("userEmail", email);

    window.location.href = "dashboard.html";
});
