const mainForm = document.querySelector('.main-form');

mainForm.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/files')
  .then(resp => resp.text())
  .then(resp => {
    console.log(resp);
  }).catch(error => {
    console.log(error);
    
  })
  console.log(e.target);
})