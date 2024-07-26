document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    if (errorMessage) {
        errorMessage.remove();
    }

    if (successMessage) {
        successMessage.remove();
    }

    if (!emailPattern.test(email)) {
        const error = document.createElement("p");
        error.id = "error-message";
        error.textContent = "Email invalid!";
        error.style.color = "red";
        document.getElementById("login-form").appendChild(error);
        return;
    }

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.status === 200) {
            response.json().then(data => {
                localStorage.setItem("token", data.token);
                document.getElementById("login-form").style.display = "none";
                document.getElementById("data").style.display = "block";
                const successMessage = document.createElement("p");
                successMessage.id = "success-message";
                successMessage.textContent = "Successfully logged in!";
                successMessage.style.color = "green";
                document.getElementById("data").appendChild(successMessage);
            });
        } else {
            window.location.href = "/404.html";
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

function logout(){
    localStorage.setItem("token", "");
    document.getElementById("login-form").style.display = "block";
    document.getElementById("data").style.display = "none";
    
    const successMessage = document.getElementById("success-message");
    if (successMessage) {
        successMessage.remove();
    }
}

function showData() {
    document.getElementById('data').style.display = 'block';
}
