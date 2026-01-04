function showPage(pageId) {
  let pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  document.getElementById(pageId).classList.add('active');
}

function logout() {
  alert("Logged out (UI only)");
  showPage('home');
}

function checkFraud() {
  let text = document.getElementById("inputText").value.toLowerCase();
  let result = document.getElementById("result");

  let keywords = ["urgent", "otp", "click", "verify", "win"];
  let fraud = keywords.some(word => text.includes(word));

  if (fraud) {
    result.style.color = "red";
    result.innerText = "⚠️ Possible Fraud Detected";
  } else {
    result.style.color = "green";
    result.innerText = "✅ Looks Safe";
  }

  document.getElementById("inputText").value = "";
}
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
// Show logged-in username
const user = sessionStorage.getItem("username");
if (user && document.getElementById("welcomeUser")) {
    document.getElementById("welcomeUser").innerText =
        user.charAt(0).toUpperCase() + user.slice(1);
}
const email = sessionStorage.getItem("email");

if (email === "sbjba721829@gmail.com") {
    document.getElementById("adminBtn").style.display = "inline-block";
}