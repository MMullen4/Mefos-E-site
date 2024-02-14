document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form'); 

  loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(loginForm);
      const loginData = {};
      formData.forEach((value, key) => (loginData[key] = value));

      fetch('/login', { 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          if (data.user) {
              window.location.href = '/'; // Redirects to the homepage
          } else {
              alert('Login failed: ' + data.message);
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Login failed: ' + error.message);
      });
  });
});
