//This code represents working with closing and opening setting's window
const settingsButton = document.getElementById('settings-button');
const settingsModal = document.getElementById('settings-modal');

  
settingsButton.addEventListener('click', () => {
    settingsModal.style.display = 'block';
});
const backButton = document.getElementById('back');

backButton.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});