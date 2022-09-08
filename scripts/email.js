emailjs.init('fXq8VeDLbuTWJLk5W');
const serviceID = 'service_0tjrusm';
const templateID = 'template_i39zp0d';

window.onload = function () {
  const submitButton = document.getElementById('submit-button');
  const submitMessage = document.getElementById('submit-message');

  document
    .getElementById('contact-form')
    .addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitButtonInitialContent = submitButton.innerHTML;
      const submitButtonInitialWidth =
        submitButton.getBoundingClientRect().width;

      submitButton.setAttribute(
        'style',
        `width: ${submitButtonInitialWidth}px`
      );
      submitButton.innerHTML = translator.translateTerm('sending-status');
      submitButton.setAttribute('disabled', '');

      try {
        await emailjs.sendForm(serviceID, templateID, this);
        this.reset();
        grecaptcha.reset();
        createNotification(
          submitMessage,
          'success',
          translator.translateTerm('message-submit-success')
        );
      } catch (err) {
        createNotification(
          submitMessage,
          'error',
          translator.translateTerm('message-submit-error')
        );
      }

      submitButton.innerHTML = submitButtonInitialContent;
      submitButton.removeAttribute('style');
      submitButton.removeAttribute('disabled');

      document.documentElement.addEventListener(
        'click',
        () => {
          clearNotification(submitMessage);
        },
        { once: true }
      );
    });
};
