//This code represents offline working of website
function updateStatus() {
    var statusElement = document.getElementById('status');
    if (navigator.onLine) {
      statusElement.textContent = 'Online';
      statusElement.style.color = 'green';
    } else {
      statusElement.textContent = 'Offline';
      statusElement.style.color = 'red';
    }
  }
  
  updateStatus();
  

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);