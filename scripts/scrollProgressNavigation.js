class ScrollProgressNavigation {
  constructor(parent) {
    this.parent = parent;
    this.mainContainer = document.createElement('div');
    this.mainNav = document.createElement('ul');
    this.links = [];
    this.bar = document.createElement('div');
    this.fill = document.createElement('div');

    this.#init();
    this.#generateNavigation();

    addEventListener('scroll', this.#updateScrollProgressBar.bind(this, null));
    addEventListener('resize', this.#updateScrollProgressBar.bind(this, null));
  }

  #init() {
    this.mainContainer.setAttribute('id', 'main-nav-container');
    this.parent.appendChild(this.mainContainer);
    this.mainNav.setAttribute('id', 'main-nav');
    this.mainContainer.appendChild(this.mainNav);
    this.bar.setAttribute('id', 'scroll-progress-bar');
    this.fill.setAttribute('id', 'scroll-progress-fill');
    this.mainContainer.appendChild(this.bar);
    this.bar.appendChild(this.fill);
  }

  #generateNavigation() {
    views.forEach(view => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');
      navLink.setAttribute('href', `#${view.scrollArea.id}`);
      navLink.innerText = `${view.view.getAttribute('link')}`;
      navItem.appendChild(navLink);
      this.links.push(navLink);
      this.mainNav.appendChild(navItem);
    });
  }

  #updateScrollProgressBar() {
    const percentage =
      (document.documentElement.scrollTop * 100) /
      (document.documentElement.scrollHeight - window.innerHeight);
    this.fill.setAttribute('style', `--progress: ${percentage}%`);
  }

  setActiveLink(location) {
    this.links.forEach(link => {
      link.classList.toggle(
        'active',
        `#${location.target.id}` === link.getAttribute('href')
      );
    });
  }
}
