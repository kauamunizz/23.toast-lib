"strict mode"

const toast = (() => {
  function generateToast() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', /* html */
    `
      <div class="myToast">
        <span>🦄 Wow so easy!</span>
      </div>
    `);
    
    
    const toastMade = document.querySelector('.myToast');
    toastMade.style.display = 'flex';
    
    setTimeout(() => {
      toastMade.style.display = 'none';
      
    }, 5000);
  }

  function events() {
    document.querySelector('.toast').addEventListener('click', generateToast);
  }


  function init() {

    events();
  }


  return {
    init
  }

})();
