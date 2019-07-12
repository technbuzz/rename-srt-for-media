const mainForm = document.querySelector('.main-form');
const filesContainer = document.querySelector('.files');
let ul = document.createElement('ul');

function subForm(editButton) {
  const form = document.createElement('form')
  const editField = document.createElement('input')
  const submit = document.createElement('input')
  submit.type = 'submit'
  submit.value = 'Rename'

  const cancel = document.createElement('input')
  cancel.value = 'Cancel'
  cancel.type = 'button'
  cancel.addEventListener('click', _ => {
    form.style.display = 'none'
    editButton.disabled = false
  })

  form.appendChild(editField)
  form.appendChild(submit)
  form.appendChild(cancel)
  form.style.display = 'none'
  return form
}

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
      const edit = document.createElement('button')
      edit.textContent = 'Edit'
      const editForm = subForm(edit);

      edit.addEventListener('click', e => {
        editForm.style.display = 'block'
        edit.disabled = true
      })

      el.textContent = path
      el.appendChild(edit)
      el.appendChild(editForm)
      ul.appendChild(el)
    }
    console.log(files);
    filesContainer.appendChild(ul);
  }).catch(error => {
    console.log(error);
    
  })
})

