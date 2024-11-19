document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Dummy credentials (for demo purposes)
  const validUsername = 'user123';
  const validPassword = 'password123';

  if (username === validUsername && password === validPassword) {
    alert('Login Successful');
    window.location.href = 'games.html'; // Redirect to games page
  } else {
    document.getElementById('error-message').textContent = 'Invalid username or password';
  }
});
