class View {
  constructor(element, id) {
    this.id = id;
    this.view = element;
    this.content = this.view.querySelector('.content');
    this.leftClone = this.content.cloneNode(true);
    this.rightClone = this.content.cloneNode(true);
    this.scrollArea = this.#createScrollArea();
    this.#init();
  }

  #boundSplitHandler = this.#splitHandler.bind(this, null);
  #boundJoinHandler = this.#joinHandler.bind(this, null);

  #splitHandler() {
    this.view.classList.add('hidden');
    this.view.removeAttribute('transitioning');
  }

  #joinHandler() {
    this.content.classList.remove('hidden');
    this.view.removeAttribute('transitioning');
  }

  #init() {
    this.view.setAttribute('id', `view-${this.id}`);
    this.leftClone.classList.add('left-half');
    this.rightClone.classList.add('right-half');
    this.view.appendChild(this.leftClone);
    this.view.appendChild(this.rightClone);
  }

  #createScrollArea() {
    const scrollArea = document.createElement('div');
    scrollArea.className = 'scroll-area';
    scrollArea.setAttribute('id', this.view.getAttribute('link').toLowerCase());
    scrollArea.setAttribute('observer-data', `${this.id}`);
    mainContainer.appendChild(scrollArea);
    return scrollArea;
  }

  split() {
    this.view.setAttribute('transitioning', '');
    this.view.classList.add('split');
    this.leftClone.scrollTo(0, this.content.scrollTop);
    this.rightClone.scrollTo(0, this.content.scrollTop);
    this.content.classList.add('hidden');

    this.leftClone.addEventListener('animationend', this.#boundSplitHandler, {
      once: true,
    });
  }

  join() {
    this.view.setAttribute('transitioning', '');
    this.view.classList.remove('hidden', 'split');

    this.leftClone.removeEventListener('animationend', this.#boundSplitHandler);
    this.rightClone.addEventListener('animationend', this.#boundJoinHandler, {
      once: true,
    });
  }
}
