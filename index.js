document.querySelector('#aboutMeLi').addEventListener('click', function () {
    var height = document.querySelector('#info').offsetTop;
    window.scrollTo({ top: height });
});

document.querySelector('#skillsLi').addEventListener('click', function () {
    var height = document.querySelector('#skills').offsetTop;
    window.scrollTo({ top: height });
})
document.querySelector('#projectsLi').addEventListener('click', function () {
    var height = document.querySelector('.projects').offsetTop;
    window.scrollTo({ top: height });
})
document.querySelector('#careerLi').addEventListener('click', function () {
    var height = document.querySelector('.Careers').offsetTop;
    window.scrollTo({ top: height });
})

document.querySelector('#topBtn').addEventListener('click', function () {
    window.scrollTo({ top: location });
})




new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
})