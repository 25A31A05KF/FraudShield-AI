function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const card = document.querySelector(".login-card");

    if (username.value === "admin" && password.value === "1234") {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("username", "admin");
        window.location.href = "index.html";
    } else {
        // 🔥 SHAKE EFFECT
        card.classList.add("shake");

        setTimeout(() => {
            card.classList.remove("shake");
        }, 400);

        alert("❌ Wrong username or password");
    }
}