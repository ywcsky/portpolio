document.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        document.querySelector('header').setAttribute("id", "nav_fixed");
    } else {
        document.querySelector('header').setAttribute("id", "");
    }
});

function scrollToAubotMe(){
    var location = document.querySelector('#info').offsetTop;
    console.log(location);
    window.scrollTo({top:location, behavior:'smooth'});
}