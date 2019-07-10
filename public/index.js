const mainForm = document.querySelector('.main-form');
const filesContainer = document.querySelector('.files');
let ul = document.createElement('ul');

mainForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    folderName: e.target.folderName.value
  }
  fetch('/files', {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(files => {
    for (let index = 0; index < files.length; index++) {
      const path = files[index];
      const el = document.createElement('li')
      el.textContent = path
      ul.appendChild(el)
    }
    console.log(files);
    filesContainer.appendChild(ul);
  }).catch(error => {
    console.log(error);
    
  })
})