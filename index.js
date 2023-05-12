document.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        document.querySelector('header').setAttribute("id", "nav_fixed");
    } else {
        document.querySelector('header').setAttribute("id", "");
    }
});

function scrollToAubotMe(){
    var location = document.querySelector('#info').offsetTop;
    var height = document.querySelector('header').offsetHeight;
    console.log(location);
    window.scrollTo({top:location-height, behavior:'smooth'});
}

function scrollToSkills(){
    var location = document.querySelector('#skills').offsetTop;
    var height = document.querySelector('header').offsetHeight;
    console.log(location);
    window.scrollTo({top:location-height, behavior:'smooth'});
}