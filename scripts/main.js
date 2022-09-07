// 'use strict';

let views = [];
let mainNav;
const translator = new Translator();

const header = document
  .querySelector('.main-header')
  .querySelector('.container');
const themeSwitcher = document.getElementById('theme-switcher__check');
const languageSwitcher = document.getElementById('language-switcher__check');
const languageIndicator = document.getElementById(
  'language-switcher__indicator'
);
const appTools = document.getElementById('app-tools');
const toolsToggle = document.getElementById('app-tools__toggle-btn');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = parseInt(entry.target.getAttribute('observer-data'));

      entry.isIntersecting && mainNav.setActiveLink(entry);
      if (entry.target.getBoundingClientRect().top < 0) {
        entry.isIntersecting ? views[id].join() : views[id].split();
      }
    });
  },
  { threshold: 0.5 }
);

const initTheme = () => {
  let theme = localStorage.getItem('theme');
  !theme && (theme = 'light');
  themeSwitcher.checked = theme === 'light' ? false : true;
  setTheme(theme);
};

const setTheme = theme => {
  localStorage.setItem('theme', theme);
  if (theme === 'light') {
    document.body.classList.replace('dark', 'light');
  } else {
    document.body.classList.replace('light', 'dark');
  }
};

const initLanguageSwitcher = () => {
  languageSwitcher.checked = translator.language === 'en' ? true : false;
  languageIndicator.innerHTML = translator.language;
};

addEventListener('DOMContentLoaded', () => {
  const viewNodes = [...document.querySelectorAll('.view')];

  viewNodes.forEach((view, index) => {
    view.setAttribute('style', `z-index: ${-index || 0};`);
    const newView = new View(view, index);
    observer.observe(newView.scrollArea);
    views.push(newView);
  });

  const skills = [...document.querySelectorAll('.skill__level-fill')];

  skills.forEach(skill =>
    skill.setAttribute('style', `--level: ${skill.innerText}`)
  );

  mainNav = new ScrollProgressNavigation(header);

  initTheme();

  translator.translate();
  initLanguageSwitcher();

  scrollTo(0, 0);
});

themeSwitcher.addEventListener('click', e => {
  setTheme(e.target.checked === true ? 'dark' : 'light');
});

languageSwitcher.addEventListener('click', e => {
  translator.setLanguage(e.target.checked === true ? 'en' : 'ro');
  languageIndicator.innerHTML = translator.language;
});

toolsToggle.addEventListener('click', () => {
  appTools.classList.toggle('retracted');
  toolsToggle.innerHTML = appTools.className.includes('retracted')
    ? '<i class="iconfont-cog"></i>'
    : '<i class="iconfont-cancel-circled"></i>';
});
