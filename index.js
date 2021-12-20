//check element before animating
function check(elem, animation) {
    const element = document.querySelector(elem)
    const observer = new IntersectionObserver(entries => {
        element.classList.toggle(animation, entries[0].isIntersecting)

    })
    observer.observe(element)

}
check('.title', '.titles-anime')
check('.sub-title', '.titles-anime')
check('.overall-cont', '.overall-anime')

document.getElementById('back-to-top').addEventListener('click', () => {
    let a_tag = document.createElement('a')
    a_tag.href = '#everything'
    a_tag.click()
})



function displaySignup() {
    const docs = document.getElementById('overall-container')
        // clear the login page first
    document.getElementById('login-form').style.display = 'none'
        // show the select account form
    document.getElementById('select-account').style.display = 'flex'
    docs.style.backgroundColor = 'black'
    docs.style.opacity = '50%'
        // add event listeners
    document.querySelectorAll('.text').forEach((e) => {
        e.addEventListener('click', () => {
            document.getElementById('signup-form').style.display = 'flex'
            docs.style.backgroundColor = 'black'
            docs.style.opacity = '50%'
            document.getElementById('select-account').style.display = 'none'
        })
    })


}

function displayLogin() {
    document.getElementById('signup-form').style.display = 'none'
    document.getElementById('login-form').style.display = 'flex'
    const docs = document.getElementById('overall-container')
    docs.style.backgroundColor = 'black'
    docs.style.opacity = '50%'
}