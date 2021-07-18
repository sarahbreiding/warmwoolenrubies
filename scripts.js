$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.resource-item.pattern').click(getDataName);

function getDataName(){
    var patternName = $(this).data('name');
    updateURL(patternName);
}

function updateURL(patternName) {
    var currentURL = window.location.href;
    if (currentURL.indexOf('#') >= 0) {
        var rootURL = currentURL.split('#')[0];
       $('.pattern-text-container').css('display','none');
        window.location.href = rootURL + '#' + patternName;
        togglePattern(patternName)
    }
    else {
        window.location.href = currentURL + '#' + patternName;
        togglePattern(patternName);
    }
}

function togglePattern(patternName) {
    $('#' + patternName).css('display','block');
}

document.querySelector("form").addEventListener("submit", handleSubmit);

var handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

$('.nav-link').click(function (e) {
    e.preventDefault();

    var id = $(this).attr('href');
    var scrollTo = $(id).offset().top;

    $('html,body').animate({
        'scrollTop': scrollTo
    }, 500);
});

$(document).scroll(function () {
    activeSection();
});

function activeSection() {
    var currentPosition = $(this).scrollTop();

    $('.nav-link').removeClass('active');

    $('#content .section').each(function () {
        var sectionStart = $(this).offset().top;
        var sectionEnd = sectionStart + $(this).height();

        if (currentPosition >= sectionStart  && currentPosition < sectionEnd) {
            $('.nav-link#' + $(this).attr('id') + ']').addClass('active');
        }
    });
};

// Call on page load too!
activeSection();