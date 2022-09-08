const createNotification = (element, type, message) => {
  element.innerHTML = message;
  element.classList.add(type);
};

const clearNotification = element => {
  element.innerHTML = '';
  element.classList.remove('error', 'success');
};
