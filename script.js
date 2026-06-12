const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;

    // demo login check
    if(email === "admin@gmail.com" && password === "12345"){
        alert("Login Successful!");

        // dashboard page open
        window.location.href = "dashboard.html";
    } 
    else {
        alert("Wrong Email or Password!");
    }
});
const fileInput = document.getElementById("fileUpload");

if(fileInput){
    fileInput.addEventListener("change", function(){
        let fileName = document.getElementById("fileName");

        if(this.files.length > 0){
            fileName.innerText = "Selected: " + this.files[0].name;
        }
    });
}
