let attempts = 0;
let locked = false;
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
if (locked) {
   document.getElementById("errorMsg").innerHTML = "🔒 Account Locked. Wait 30 sec";
   return;
}
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");

    let correctPassword = "123456";

    if(password === correctPassword){
         attempts = 0;
        localStorage.setItem("userEmail", email);
        window.location.href = "dashboard.html";
   else {
   attempts++;
   errorMsg.innerHTML = "❌ Wrong Password | Attempt: " + attempts + "/3";

   if (attempts >= 3) {
      locked = true;
      document.getElementById("loginBtn").disabled = true;
      errorMsg.innerHTML = "🔒 Account Locked for 30 sec";

      setTimeout(function() {
         locked = false;
         attempts = 0;
         document.getElementById("loginBtn").disabled = false;
         errorMsg.innerHTML = "";
      }, 30000);
   }
}
});
