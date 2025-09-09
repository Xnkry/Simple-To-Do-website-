document.addEventListener("DOMContentLoaded", function () {
  // Register
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
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
        window.location.href = "task.html";
      } else {
        alert("Email not found! Please register first.");
      }
    });
  }

  // Task page → show username
  const HelloUser = document.getElementById("HelloUser");
  const storedUsername = localStorage.getItem("username");
  if (HelloUser && storedUsername) {
    HelloUser.innerHTML =
      `<i class="bi bi-arrow-return-right"></i> Hello, ${storedUsername}!`;
  }
});
// tasks
const Textfield = document.getElementById("TextField");
const Addtask = document.getElementById("AddTask");
const TaskField = document.getElementById("Container")
//REQUIRED
Addtask.addEventListener("click",()=>{
  if(Textfield.value.length==0){
  alert("You must add a task!");
}else{
  const NewField = document.createElement("span");
  NewField.className="d-flex justify-content-column"
  NewField.innerHTML=[`<p>${Textfield.value}</p>`].join('');
  TaskField.appendChild(NewField);

}
})