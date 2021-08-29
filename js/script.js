$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },

        600: {
            items: 3,
            margin: 30,
        },
        1000: {
            items: 3,
            margin: 30
        }
    }
})



const plus = document.querySelector('.plus__btn');
plus.onclick = () => {
    plus.classList.toggle('active');
}

const cityArow = document.querySelector('.city__arow');
const dropdownList = document.querySelector('.dropdown__list');

cityArow.onclick = () => {
    cityArow.classList.toggle('active');
    dropdownList.classList.toggle('active');
}


const burger = document.querySelector('.one__burger');
const burgerSpan = document.querySelector('.burger__span');
const sidebar = document.querySelector('.border-right');

burger.onclick = () => {
    burgerSpan.classList.toggle('active');
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
}