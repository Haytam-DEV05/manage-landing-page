const boxes = document.querySelectorAll('#testimonials .box')

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  },
  {
    threshold: 0.2
  }
)

boxes.forEach((box, index) => {
  box.style.transitionDelay = `${index * 0.2}s`
  observer.observe(box)
})

// TOGGLE MENU =>
const navbarHome = document.querySelector('.navbar-home')
const hamburger = document.querySelector('#hamburger')
const close = document.querySelector('#close')
const ul = document.querySelector('#header .navbar ul')

navbarHome.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  close.classList.toggle('active')
  ul.classList.toggle('active')
})
