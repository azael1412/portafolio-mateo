const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');

function toggleMenu(){
    menu.classList.toggle('menu_opened');
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
        menu.classList.remove('menu_opened');
    });
    let hash = menuLink.getAttribute('href');
    let target = document.querySelector(hash);
    console.log( hash, target);
    if(target){
        observer.observe(target);
    }
});
