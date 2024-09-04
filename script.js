const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'Billgates2003' && password === 'Stephen20') {
    // Redirect to the private cloud storage website
    window.location.href = 'https://your-private-cloud-storage-website.com';
  } else {
    alert('Invalid username or password.');
  }
});