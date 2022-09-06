const redirectTimer = document.getElementById('redirect-seconds');
const manualRedirectButton = document.getElementById('manual-redirect-btn');
const translator = new Translator();
let redirectTime = 5;
redirectTimer.innerText = redirectTime;

const initTheme = () => {
  let theme = localStorage.getItem('theme');
  !theme && (theme = 'light');
  setTheme(theme);
};

const setTheme = theme => {
  if (theme === 'light') {
    document.body.classList.replace('dark', 'light');
  } else {
    document.body.classList.replace('light', 'dark');
  }
};

addEventListener('DOMContentLoaded', () => {
  initTheme();
  translator.translate();
});

manualRedirectButton.addEventListener('click', () => {
  location.replace('https://mihaidragan.eu');
});

const interval = setInterval(() => {
  if (redirectTime === 0) {
    clearInterval(interval);
    return location.replace('https://mihaidragan.eu');
  }
  redirectTime--;
  redirectTimer.innerText = redirectTime;
}, 1000);
