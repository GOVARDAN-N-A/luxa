var loading = document.getElementById("pre-loading")
window.addEventListener("load", function(){
  loading.style.display = "none";
})


$(document).ready(function () {
    // Slick carousel for containerSlider
    $('#containerSlider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('#containerSlider2').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.prev').click(function () {
        $('#containerSlider2').slick('slickPrev');
    });

    $('.next').click(function () {
        $('#containerSlider2').slick('slickNext');
    });

    
    $('#containerSlider3').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.prev2').click(function () {
        $('#containerSlider3').slick('slickPrev');
    });

    $('.next2').click(function () {
        $('#containerSlider3').slick('slickNext');
    });

});


// document.addEventListener('DOMContentLoaded', function()  {
//   console.log("DOM content loaded");
//   const moreAboutBtn = document.getElementById('more-about-btn');
//   const socialIcons = document.querySelector('.social-icons');
//   const navbarToggle = document.querySelector('.navbar-toggle'); 
//   const navbar = document.querySelector('.navbar');

//   moreAboutBtn.addEventListener('click', () => {
//       socialIcons.classList.toggle('active').style.overflow="hidden";
//   });
//   navbarToggle.addEventListener('click',() => {
//   //  navbarToggle.style.display = "none";('active');

//     navbar.style.display = 'block' ;
//   });



//   document.addEventListener('click', (event) => {
//       const targetElement = event.target;

//       if (!socialIcons.contains(targetElement) && targetElement !== moreAboutBtn) {
//           socialIcons.classList.remove('active');
//       }

//       if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
//           navbarToggle.display='block';
//           navbar.classList.remove('active')
//       }

//       if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
//         navbar.style.display = 'none';
//       }

//     //   if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
//     //     navbarToggle.style.display ="block"
//     // }
     
//   });
//   console.log(navbar, navbarToggle)
// });

// var loading = document.getElementById("pre-loading")
// window.addEventListener("load", function(){
//   loading.style.display = "none";
// })


// document.addEventListener('DOMContentLoaded', function() {
//   const moreAboutBtn = document.getElementById('more-about-btn');
//   const socialIcons = document.querySelector('.social-icons');
//   const navbarToggle = document.querySelector('.navbar-toggle i');
//   const navbar = document.querySelector('.navbar');
//   moreAboutBtn.addEventListener('click', () => {
//     socialIcons.classList.toggle('active').style.overflow = "hidden";
//   });

//   navbarToggle.addEventListener('click', () => {
//     navbar.style.display = 'block';
//     navbar.style.overflow = 'hidden'
//   });

//   // Function to handle window resize
//   function handleWindowResize() {
//     const windowWidth = window.innerWidth;

//     if (windowWidth <= 932) {
//       navbarToggle.style.display = 'block';
//       navbar.style.display = 'none';
//     } else {
//       navbarToggle.style.display = 'none';
//       navbar.style.display = 'block';
//     }
//   }
