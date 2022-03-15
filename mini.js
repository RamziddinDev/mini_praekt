function button1() {
    var btn1 = document.querySelector('.one');
    var btn2 = document.querySelector('.two');
    var btn3 = document.querySelector('.three');
    var carusel = document.querySelector('.image_carusel')
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active')
    carusel.style.backgroundImage = 'url(./images/IMAGE.png)'
}

function button2() {
    var btn1 = document.querySelector('.one');
    var btn2 = document.querySelector('.two');
    var btn3 = document.querySelector('.three');
    var carusel = document.querySelector('.image_carusel')
    btn2.classList.add('active');
    btn1.classList.remove('active');
    btn3.classList.remove('active');
    carusel.style.backgroundImage = 'url(./images/9.png)'
}

function button3() {
    var btn1 = document.querySelector('.one');
    var btn2 = document.querySelector('.two');
    var btn3 = document.querySelector('.three');
    var carusel = document.querySelector('.image_carusel')
    btn3.classList.add('active');
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    carusel.style.backgroundImage = 'url(./images/4.png)'
}