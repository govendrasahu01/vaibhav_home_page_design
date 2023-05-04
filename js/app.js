// header wrapper toggle==========
$('#headRightBtn').click(function () {
    $('#rightWrapper').addClass('right-wrapper-active');
    // $('#rightWrapper').
})
$('#right-cls-btn').click(function () {
    $('#rightWrapper').removeClass('right-wrapper-active');
})
$('#mainBtnNav').click(function () {
    $('#leftMainNav').addClass('man-left-active')
})
$('#leftNavClose').click(function () {
    $('#leftMainNav').removeClass('man-left-active')
})
// header wrapper toggle end here ===============

// after scroll fixed nav ===============
var navbar = document.getElementById("mainHeader");

window.onscroll = function(){
    var scrollVal = window.scrollY;
    // console.log(scrollVal);
    if(scrollVal >= 150){
        navbar.classList.add('nav-effect')
    }if(scrollVal >= 500){
        navbar.classList.remove('nav-effect')
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('nav-effect')
        navbar.classList.remove('fixed-nav')
    }
}
// window.onscroll = function(){
//     if(scrollVall == 100){
//         navbar.classList.add('fixed-nav')
//     }else if(scrollVal ==99){
//         navbar.classList.remove('fixed-nav')
//     }
// }
// Initialize Swiper=======================

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
