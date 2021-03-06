const loginFormHandler = async (event) => {
  event.preventDefault();
  //alert("starting to work")
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password-login').value.trim();


  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/posts/');
    } else {
      alert('Failed to log in.');
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
