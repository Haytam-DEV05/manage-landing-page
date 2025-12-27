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
