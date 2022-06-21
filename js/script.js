const button = document.querySelector('.ripple');

button.addEventListener('click', function (e    ) {
    let ripple = document.createElement('span');
    ripple.classList.add('circle');
    this.appendChild(ripple);


    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop


    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
})