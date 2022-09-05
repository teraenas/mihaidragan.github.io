// 'use strict';

let views = [];
let mainNav;

const mainContainer = document.querySelector('main');
const header = document
  .querySelector('.main-header')
  .querySelector('.container');
const themeSwitcher = document.getElementById('theme-switcher__check');

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
  scrollTo(0, 0);
});

themeSwitcher.addEventListener('click', e => {
  setTheme(e.target.checked === true ? 'dark' : 'light');
});
