const timeouts = {},
  keys = document.querySelector('.keys')
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('keydown', (e) => {
    const keyCode = e.keyCode
    const key = document.querySelector(`button[data-key="${keyCode}"]`)
    if (key) {
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
      if (timeouts[keyCode]) clearTimeout(timeouts[keyCode])
      audio.play()
      audio.currentTime = 0
      const clone = key.cloneNode(true)
      clone.classList.add('active')
      timeouts[keyCode] = setTimeout(() => {
        clone.classList.remove('active')
      }, 500)
      key.parentElement.replaceChild(clone, key)
    }
  })

  keys.addEventListener('click', (e) => {
    let element = e.target
    while (element && element.tagName !== 'BUTTON') {
      element = element.parentElement
    }

    if (element) {
      const getKeyAtr = element.getAttribute('data-key')
      const audio = document.querySelector(`audio[data-key="${getKeyAtr}"]`)
      if (timeouts[getKeyAtr]) clearTimeout(timeouts[getKeyAtr])
      audio.play()
      audio.currentTime = 0
      let clone = element.cloneNode(true)
      clone.classList.add('active')
      timeouts[getKeyAtr] = setTimeout(() => {
        clone.classList.remove('active')
      }, 500)
      element.parentElement.replaceChild(clone, element)
    }
  })
})
