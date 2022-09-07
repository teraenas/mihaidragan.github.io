class ScrollProgressNavigation {
  constructor(parent) {
    this.parent = parent;
    this.container = document.createElement('div');
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
    this.container.setAttribute('id', 'main-nav-container');
    this.parent.appendChild(this.container);
    this.mainNav.setAttribute('id', 'main-nav');
    this.container.appendChild(this.mainNav);
    this.bar.setAttribute('id', 'scroll-progress-bar');
    this.fill.setAttribute('id', 'scroll-progress-fill');
    this.container.appendChild(this.bar);
    this.bar.appendChild(this.fill);
  }

  #generateNavigation() {
    views.forEach(view => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');
      navLink.setAttribute('href', `#${view.scrollArea.id}`);
      view.view.getAttribute('linktranslateid') &&
        navLink.setAttribute(
          'translateid',
          view.view.getAttribute('linktranslateid')
        );
      navLink.innerText = view.view.getAttribute('link');

      navLink.addEventListener('click', e => {
        e.preventDefault();
        scrollTo({
          top: view.scrollArea.offsetTop,
          behavior: 'smooth',
        });
      });

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
