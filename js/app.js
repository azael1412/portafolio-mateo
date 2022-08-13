const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.menu-open');
const closeMenuBtn = document.querySelector('.menu-close');

function toggleMenu(){
    menu.classList.toggle('menu-opened');
}

openMenuBtn.addEventListener('click',toggleMenu);
closeMenuBtn.addEventListener('click',toggleMenu);

const menuLinks = document.querySelectorAll('.menu li a[href^="#"]');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let id = entry.target.getAttribute('id');
        let menuLink = document.querySelector(`.menu li a[href="#${id}"`);

        if(entry.isIntersecting){
            document.querySelector('.menu li a.selected').classList.remove('selected');
            menuLink.classList.add('selected');
        }
    });
},{
    rootMargin: "-30% 0px -70% 0px",
});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', function(e) {
        menu.classList.remove('menu-opened');
    });
    let hash = menuLink.getAttribute('href');
    let target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
});
