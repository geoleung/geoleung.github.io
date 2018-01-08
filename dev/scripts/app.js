const textChange = function() {
    const top1 = $('#home').offset().top;
    const top2 = $('#contact').offset().top;
    
    $(document).scroll(function() {
      const scrollPos = $(document).scrollTop();
      if (scrollPos >= top1 && scrollPos < top2) {
        $('a[href^="#"]').css('color', '#808080');
        $('a[href^="#"]').on('mouseover', function() {
            $(this).css('color', '#333')
        });
        $('a[href^="#"]').on('mouseout', function() {
            $(this).css('color', '#808080');
        });
      } else if (scrollPos > top2) {
        $('a[href^="#"]').css('color', '#DDD');
        $('a[href^="#"]').on('mouseover', function() {
            $(this).css('color', '#999');
        });
        $('a[href^="#"]').on('mouseout', function() {
            $(this).css('color', '#DDD');
        });
      } 
    });
}

const navCollapse = function() {
    const windowSize = $(window).width();
    const minWindow = 670;

    if (windowSize <= minWindow) {
        $('a[href^="#"]').on('click', function() {
            $('input[type="checkbox"]').prop('checked', false);
        });
    }
}

// const clickOutside = function() {
//         const opened = $('input[type="checkbox"]').attr('checked');
//         if (opened === true) {
//             $(document).on('click', function() {
//                 $('input[type="checkbox"]').prop('checked', false);
//             });
//         }
// }


$(function() {
    $(document).on('click', 'a[href^="#"]', function(e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
    });

    $('a[href^="http://geoffreyleung.com/decision-maker"]').attr('target', '_blank');
    $('a[href^="http://geoffreyleung.com/discover-events"]').attr('target', '_blank');
    $('a[href^="http://geoffreyleung.com/slice-finder"]').attr('target', '_blank');
    $('a[href^="http://geoffreyleung.com/coursea"]').attr('target', '_blank');

    textChange();
    navCollapse();
    // clickOutside();
});