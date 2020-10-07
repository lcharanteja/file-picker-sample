import './style.css'
import { highlight } from './highlight'

const textarea = document.querySelector('textarea')

// Handle [cmd]+[s] and [cmd]+[o] shortcuts
window.addEventListener('keydown', event => {
  if (event.key === 'o' && event.metaKey) {
    event.preventDefault()
    highlight('cmd+o')
    openFile()
  }

  if (event.key === 's' && event.metaKey) {
    event.preventDefault()
    highlight('cmd+s')
    saveFile()
  }
})

let fileHandle;

async function openFile() {
  const [handle] = await window.showOpenFilePicker()
  fileHandle = handle

  const file = await handle.getFile()
  const text = await file.text()

  textarea.value = text
}

async function saveFile() {
  const writable = await fileHandle.createWritable()
  await writable.write(textarea.value)
  await writable.close()
}
