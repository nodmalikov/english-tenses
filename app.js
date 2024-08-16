const elDarkButton = document.querySelector('.dark-button');
const elSunIcon = document.querySelector('.sun-icon');
const elMoonIcon = document.querySelector('.moon-icon');
const elBody = document.querySelector('body');

// FUNCTION TO APPLY DARK MODE BASED ON LOCALSTORAGE VALUE
function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        elBody.classList.add('dark-mode');
        elMoonIcon.classList.add('icon-block');
        elSunIcon.classList.add('icon-none');
    } else {
        elBody.classList.remove('dark-mode');
        elMoonIcon.classList.remove('icon-block');
        elSunIcon.classList.remove('icon-none');
    }
}

// CHECK LOCALSTORAGE ON PAGE LOAD
const isDarkMode = localStorage.getItem('darkMode') === 'true';
applyDarkMode(isDarkMode);

// TOGGLE DARK MODE ON BUTTON CLICK
elDarkButton.addEventListener('click', function () {
    const currentMode = elBody.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', currentMode);
    applyDarkMode(currentMode);
});
