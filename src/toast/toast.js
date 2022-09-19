"strict mode"

const toast = (() => {
  /* Toast Top Left */
  function generateToastTopLeft() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', /* html */
    `
      <div class="toast-left">
        <span>🦄 Wow so easy!</span>
      </div>
    `);
    
    
    const toastMade = document.querySelector('.toast-left');
    toastMade.style.display = 'flex';
    
    setTimeout(() => {
      toastMade.style.display = 'none';
      
    }, 5000);
  }
  
  /* Toast Top Center */
  function generateToastTopCenter() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', /* html */
    `
      <div class="toast-center">
        <span>🦄 Wow so easy!</span>
      </div>
    `);
    
    
    const toastMade = document.querySelector('.toast-center');
    toastMade.style.display = 'flex';
    
    setTimeout(() => {
      toastMade.style.display = 'none';
      
    }, 5000);
  }
  
  /* Toast Top Right */
  function generateToastTopRight() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', /* html */
    `
      <div class="toast-rigth">
        <span>🦄 Wow so easy!</span>
      </div>
    `);
    
    
    const toastMade = document.querySelector('.toast-rigth');
    toastMade.style.display = 'flex';
    
    setTimeout(() => {
      toastMade.style.display = 'none';
      
    }, 5000);
  }

  /* Toast Bottom Left */
  function generateToastBottomLeft() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', /* html */
    `
      <div class="toast-left-bt">
        <span>🦄 Wow so easy!</span>
      </div>
    `);
    
    
    const toastMade = document.querySelector('.toast-left-bt');
    toastMade.style.display = 'flex';
    
    setTimeout(() => {
      toastMade.style.display = 'none';
      
    }, 5000);
  }
  
  /* Toast Bottom Center */
  function generateToastBottomCenter() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', /* html */
    `
      <div class="toast-center-bt">
        <span>🦄 Wow so easy!</span>
      </div>
    `);
    
    
    const toastMade = document.querySelector('.toast-center-bt');
    toastMade.style.display = 'flex';
    
    setTimeout(() => {
      toastMade.style.display = 'none';
      
    }, 5000);
  }
  
  /* Toast Bottom Right */
  function generateToastBottomRight() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', /* html */
    `
      <div class="toast-rigth-bt">
        <span>🦄 Wow so easy!</span>
      </div>
    `);
    
    
    const toastMade = document.querySelector('.toast-rigth-bt');
    toastMade.style.display = 'flex';
    
    setTimeout(() => {
      toastMade.style.display = 'none';
      
    }, 5000);
  }


  function events() {
    document.querySelector('.toast-top-right').addEventListener('click', generateToastTopRight);

    document.querySelector('.toast-top-left').addEventListener('click', generateToastTopLeft);

    document.querySelector('.toast-top-center').addEventListener('click', generateToastTopCenter);

    document.querySelector('.toast-bottom-right').addEventListener('click', generateToastBottomRight);

    document.querySelector('.toast-bottom-center').addEventListener('click', generateToastBottomCenter);
    
    document.querySelector('.toast-bottom-left').addEventListener('click', generateToastBottomLeft);

  }


  function init() {

    events();
  }


  return {
    init
  }

})();
