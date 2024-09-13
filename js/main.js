new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  arrows: false,
  gap: "15px",
  breakpoints: { 1010: { perPage: 2 } },
}).mount();
let mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const humburger = document.querySelector(".hamburger-lines");
const menu = document.querySelector(".mobile-menu");
humburger.onclick = function () { // при клике на гамбургер срабатывает функция 
  humburger.classList.toggle("hamburger-open");
  //classList работа с классами
  menu.classList.toggle("menu-open");
};
const menuLinks = document.querySelectorAll(".menu-items a");
menuLinks.forEach(link => link.onclick = menuClose)
function menuClose(){ // forEach для работы с каждым элементом отдельно. => стрелочная функция
    humburger.classList.remove("hamburger-open");
    menu.classList.remove("menu-open");
};
// const ButtonUp = document.querySelector(".buttonup")
// humburger.addEventListener('click', function(){
//   setTimeout (()=> ButtonUp.classList.toggle("buttonup"), 200);
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const headerOffset = document.querySelector('header').offsetHeight; // Высота заголовка
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
