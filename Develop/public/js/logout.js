document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('#logout-button');
    if (logoutButton) { // Check if the logout button exists
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
      
            fetch('/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    console.log('Logged out successfully.');
                    window.location.replace('/login'); // Redirect to login page
                } else {
                    console.log('Failed to log out.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});
