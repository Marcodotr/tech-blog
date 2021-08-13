const signupFormHandler = async (event) => {
  event.preventDefault();

  const last_name = document.querySelector('#userLast').value.trim();
  const first_name = document.querySelector('#userFirst').value.trim();
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password-signup').value.trim();


  if (username && first_name && last_name && password) {//(username && email && password)
    const response = await fetch("/api/users", {
      method: 'POST',
      body: JSON.stringify({ username, first_name, last_name, password }), //username, email, password
      headers: { 'Content-Type': 'application/json' },
    });
    /*
    .then(function() {
      console.log("ok");
      console.log(response);
  }).catch(function(error) {
      console.log(error);
      console.log(response);
  });*/
    
    if (response.ok) {
      document.location.replace('/login');
      //alert("ok")
    } else {
      alert('Failed to sign up.');
    }
  }
};
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
