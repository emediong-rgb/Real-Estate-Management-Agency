function check(elem, anime) {
    let element = document.querySelector(elem)
    let observer = new IntersectionObserver(entries => {
        element.classList.toggle(anime, entries[0].isIntersecting)
    })
    observer.observe(element)
}

check('.categories', '.categories-anime')