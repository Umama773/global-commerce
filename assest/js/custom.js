
AOS.init(
  {
    once: true,
  }
);
window.addEventListener('load', AOS.refresh);





window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var togglebtn = document.getElementById('togglebtn'); // Adding menu-btn selection
  var navLinks = navbar.querySelectorAll('.nav-link');
  var dropdownMenus = document.querySelectorAll('.drop-menu');

  if (window.scrollY > window.innerHeight * 0.7) { // Change the threshold to 80% of viewport height (80vh)
    navbar.style.backgroundColor = 'white'; // Change navbar background color to white
    togglebtn.style.color = 'black';  // Change menu-btn background color to black
    navLinks.forEach(function(link) {
      link.style.color = 'black'; // Change link color to black
    });
    dropdownMenus.forEach(function(menu) {
      menu.style.backgroundColor = 'white'; // Change dropdown menu background color to white
    });
  } else {
    navbar.style.backgroundColor = 'transparent'; // Reset navbar background color to transparent
    togglebtn.style.color = 'white'; // Reset menu-btn background color to transparent
    navLinks.forEach(function(link) {
      link.style.color = 'white'; // Reset link color to white
    });
    dropdownMenus.forEach(function(menu) {
      menu.style.backgroundColor = '#0B3C65'; // Reset dropdown menu background color to transparent
    });
  }
});


 $(document).ready(function($) {
// testimonal slider
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
});

// team slider
$('.team-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
});


// banner-slider

  $('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});
});


// counter
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});



