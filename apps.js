// movement animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items 
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /20;
    let yAxis = (window.innerHeight / 2 - e.pageY) /20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //pop out
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(150px)";
})

//animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 3s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //pop back transition
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotate(0deg)";

})