document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission to simulate login process
  
  // Get the username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Dummy credentials for simulation
  const validUsername = "user123";
  const validPassword = "password123";
  
  // Clear any previous error message
  document.getElementById("error-message").style.display = "none";
  
  // Check if the credentials are correct
  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    // Redirect to a different page (optional)
    // window.location.href = "/home"; // You can redirect after successful login
  } else {
    // Display error message
    document.getElementById("error-message").textContent = "Invalid username or password!";
    document.getElementById("error-message").style.display = "block";
  }
});
