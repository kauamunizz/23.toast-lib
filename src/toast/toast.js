"strict mode"

const toast = (() => {
  function generateToast(config) {
    document.querySelector('body').insertAdjacentHTML('afterbegin', /* html */
      `
        <div class="${config.position} ">
          <span>${config.text}</span>
        </div>
      `
    );

    const toastMade = document.querySelector(`.${config.position}`);

    setTimeout(() => {
      toastMade.style.display = 'none';

    }, `${config.time}`);
  }

  function events() {
    document.querySelector('.toast').addEventListener('click', () => {
      generateToast({
        text: '🦄 Wow so easy!',
        position: 'bottom-center',
        time: 5000,
        type: 'success'
      });
    });


  }


  function init() {
    events();
  }


  return {
    init
  }

})();
