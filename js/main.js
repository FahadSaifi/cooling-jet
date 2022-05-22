$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 70,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    autoplayHoverPause: true,
    slideTransition: 'ease',
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


// const Item = document.querySelectorAll(".owl-item");
// const btn = document.querySelectorAll(".owl-nav button");
// const a = document.querySelectorAll('.testimonial-card-content');
// btn.forEach(elm => {
//     elm.addEventListener('click', () => {
//         for (let i = 0; i < Item.length; i++) {
//             if (Item[i].classList.contains('center')) {

//             }
//         }
//     });
// });