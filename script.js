const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    alert("Login Successful! Welcome to CloudVault Pro");

    console.log("User Logged In");
});
