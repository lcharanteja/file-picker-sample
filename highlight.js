export function highlight(id) {
  const el = document.getElementById(id)

  el.classList.add('highlight')

  setTimeout(() => {
    el.classList.remove('highlight')
  }, 100)
}
