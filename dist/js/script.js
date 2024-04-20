const starNav = document.querySelectorAll(".coffee__nav__link");
const starContent = document.querySelectorAll(".coffee__item");
starNav.forEach((star) => {
  star.addEventListener("click", () => { //proxy for starNav
    removeActiveStar();  //call the function *remove active
    star.classList.add("active"); 
    const activeContent = document.querySelector(`#${star.id}-content`); 
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}
function removeActiveContent() {
    starContent.forEach((content) => {
      content.classList.remove("active");
    });
  }


const burgir = document.querySelector(".burgir__menu");
const headerA = document.querySelector(".header__action");
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    headerA.classList.toggle("open");
})
// specificity is l.link items
const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});