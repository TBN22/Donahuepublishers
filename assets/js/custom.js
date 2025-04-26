function count(
    element,
    locale = document.documentElement.lang === "en" ? "en-EN" : "de-DE",
    interval = 30,
    totalIntervals = 200
) {
    let targetNumber = element.getAttribute("data-number");
    let currentNumber = 0;
    let intervalId = setInterval(function() {
        if (currentNumber >= targetNumber) {
            clearInterval(intervalId);
            return;
        }
        currentNumber += targetNumber / totalIntervals;
        element.innerHTML = Math.round(currentNumber).toLocaleString(locale) + "";
    }, interval);
}

// Select all elements with the class "js-counter"
const keyFacts = document.querySelectorAll(".js-counter");

// Create a new intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Check if the element has already been counted
            if (!entry.target.counted) {
                // Animate the number
                count(entry.target);
                // Set the counted flag to true to prevent multiple counts
                entry.target.counted = true;
                // Stop observing the element
                observer.unobserve(entry.target);
            }
        }
    });
});

// Observe each element with the "js-counter" class
keyFacts.forEach((keyFact) => {
    observer.observe(keyFact);
});

$(document).ready(function() {


    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
        $('body').toggleClass('overflw');
    });

    $('.index-slider,.testimo-wrapper').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
            }
        }, ]
    });


    // $('.ban-logo-slider2').slick({
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     speed: 500,  // Adjust the animation speed
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     autoplay: true,  // Enable autoplay
    //     autoplaySpeed: 3000,  // Adjust the autoplay speed in milliseconds
    //     responsive: [
    //         {
    //             breakpoint: 825,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: false,
    //                 arrows: false
    //             }
    //         },
    //     ]
    // });


    function myFunction() {
        var x = document.getElementById("myVideo").autoplay;
        document.getElementById("demo").innerHTML = x;
    }

    // $('.faqAccordian>li.first').addClass('active');
    $('.faqAccordian>li').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {}
        }
    });

    $('.searchBtn').click(function() {
        $('.searchWrap').addClass('active');
        $('.overlay').fadeIn('active');
        $('.searchWrap input').focus();
        $('.searchWrap input').focusout(function(e) {
            $(this).parents().removeClass('active');
            $('.overlay').fadeOut('active');
            $('body').removeClass('ovr-hiddn');

        });
    });
    //$('#soundbtn').click();


});


// function disableMute()
// {
//    vid.muted = false;
// }




// $(window).on('load', function() {
//     var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
//     $('ul.menu li a').each(function() {
//         var hrefVal = $(this).attr('href');
//         if (hrefVal == currentUrl) {
//             $(this).removeClass('active');
//             $(this).closest('li').addClass('active')
//             $('ul.menu li.first').removeClass('active');

//         }
//     });

// });


$(window).on('load', function() {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    // Main menu items and Submenu items
    $('ul.menu li a, ul.subMenu li a').each(function() {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            // Remove the "active" class from all menu items first
            $('ul.menu li, ul.subMenu li').removeClass('active');

            // Add the "active" class to the closest menu item
            $(this).closest('li').addClass('active');
        }
    });
});



// lp - js:

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// Get all buttons and content sections
const buttons = document.querySelectorAll('.bps-btn');
const contentSections = document.querySelectorAll('.pbs-filter-content');

// Initially show the first content section and set the first button as active
contentSections[0].style.display = 'block';
buttons[0].classList.add('active');

// Attach click event listeners to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all content sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the corresponding content section
        contentSections[index].style.display = 'block';

        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});