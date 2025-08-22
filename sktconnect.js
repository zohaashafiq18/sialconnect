
document.addEventListener('DOMContentLoaded', () => {
  // Open email client
  document.getElementById('email-link').addEventListener('click', () => {
    window.location.href = 'mailto:sialconnect@example.com';
  });

  // Open Google Maps for Sialkot
  document.getElementById('location-link').addEventListener('click', () => {
    window.open('https://www.google.com/maps/place/Sialkot', '_blank');
  });
});
