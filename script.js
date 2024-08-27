window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    let scrollLimit = 1000;
    if (value > scrollLimit) {
        value = scrollLimit;
    }

    parahead.style.marginTop = value * 2.5 + 'px'
    tree1.style.left = value * -1.5 + 'px'
    tree2.style.left = value * 1.5 + 'px'
    tree3.style.left = value * -.3 + 'px'
    tree4.style.left = value * .3 + 'px'
    moon.style.top = value * -.5 + 'px'
    bat1.style.left = value * -.2 + 'px'
    bat2.style.left = value * .2 + 'px'

})