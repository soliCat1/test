const options = document.querySelectorAll('.option')

let delay = 1000

const initOptions = () => {
  options.forEach(option => {
    setTimeout(() => option.style.opacity = 1, delay)
    delay += 1000
  })
}

export {initOptions}
