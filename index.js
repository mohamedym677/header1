let mueu = document.querySelector('.mueu');
let x = document.querySelector('.x');

let submenu = document.querySelectorAll('.sub-menu');



mueu.onclick = function () {
    x.classList.toggle('active')
}
submenu[0].addEventListener('click', function () {
    submenu[1].classList.remove('active')
    this.classList.toggle('active')

})
submenu[1].addEventListener('click', function () {
    submenu[0].classList.remove('active')
    this.classList.toggle('active')

})






























// let menuToggle = document.querySelector('.menu-toggle');
// let aaa = document.querySelector('.aaa');
// let submenu = document.querySelectorAll('.sub-menu');
// menuToggle.onclick = function () {
//     aaa.classList.toggle('active')
// }


// submenu[0].addEventListener('click', function () {
//     // for (jj of submenu) {
//     //     jj.classList.remove('active')
//     // }
//     submenu[1].classList.remove('active')

//     this.classList.toggle('active')

// })


// submenu[1].addEventListener('click', function () {

//     submenu[0].classList.remove('active')

//     this.classList.toggle('active')

// })

























