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

  // --- Tasks (MAKE SURE these IDs exist in the HTML) ---
  const Textfield = document.getElementById("TextField");
  const Addtask = document.getElementById("AddTask");
  const TaskField = document.getElementById("Container");

  // Only attach listeners if all elements exist
  if (Textfield && Addtask && TaskField) {
    function addTask() {
      const value = Textfield.value.trim();
      if (!value) {
        alert("You must add a task!");
        return;
      }

      // wrapper for one task
      const taskDiv = document.createElement("div");
      taskDiv.className = "task-item d-flex align-items-center justify-content-between";

      // task text
      const taskText = document.createElement("p");
      taskText.className = "mb-0";
      taskText.textContent = value;
      taskText.innerHTML=[`<i class="bi bi-forward-fill">${taskText.textContent}</i>`]

      // button group (keeps the markup tidy)
      const btnGroup = document.createElement("div");
      btnGroup.className = "d-flex align-items-center";

      // delete button
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn btn-sm btn-outline-danger ms-2";
      removeBtn.innerHTML = `<i class="bi bi-trash-fill"></i>`;

    removeBtn.addEventListener("click", () => {
  // Toggle strike-through on the text
  if (taskText.innerHTML.startsWith("<del>")) {
    // If already strikethrough, restore original text
    taskText.innerHTML = taskText.textContent;
  } else {
    // Add strikethrough
    taskText.innerHTML = `<del><i class="bi bi-forward-fill">${taskText.textContent}</i></del>`;
  }
});


      // assemble
      btnGroup.appendChild(removeBtn);
      taskDiv.appendChild(taskText);
      taskDiv.appendChild(btnGroup);
      TaskField.appendChild(taskDiv);

      // clear and focus
      Textfield.value = "";
      Textfield.focus();
    }

    Addtask.addEventListener("click", addTask);

    // Enter key to add
    Textfield.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addTask();
      }
    });
  }
});
