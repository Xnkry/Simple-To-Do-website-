window.onload = function () {
  // Register
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      localStorage.setItem("username", username);
      localStorage.setItem("email", email);

      alert("Registered successfully! Now you can login.");
      window.location.href = "login.html";
    });
  }

  // Login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("email").value;
      const storedEmail = localStorage.getItem("email");
      const storedUsername = localStorage.getItem("username");

      if (emailInput === storedEmail) {
        alert("Welcome back, " + storedUsername + "!");
        window.location.href = "task.html"; // ✅ relative path
      } else {
        alert("Email not found! Please register first.");
      }
    });
  }
};
