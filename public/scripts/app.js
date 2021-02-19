(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var textChange = function textChange() {
    var top1 = $('#home').offset().top;
    var top2 = $('#contact').offset().top;

    $(document).scroll(function () {
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= top1 && scrollPos < top2) {
            $('a[href^="#"]').css('color', '#808080');
            $('a[href^="#"]').on('mouseover', function () {
                $(this).css('color', '#333');
            });
            $('a[href^="#"]').on('mouseout', function () {
                $(this).css('color', '#808080');
            });
        } else if (scrollPos > top2) {
            $('a[href^="#"]').css('color', '#DDD');
            $('a[href^="#"]').on('mouseover', function () {
                $(this).css('color', '#999');
            });
            $('a[href^="#"]').on('mouseout', function () {
                $(this).css('color', '#DDD');
            });
        }
    });
};

var navCollapse = function navCollapse() {
    var windowSize = $(window).width();
    var minWindow = 670;

    if (windowSize <= minWindow) {
        $('a[href^="#"]').on('click', function () {
            $('input[type="checkbox"]').prop('checked', false);
        });
    }
};

// const clickOutside = function() {
//         const opened = $('input[type="checkbox"]').attr('checked');
//         if (opened === true) {
//             $(document).on('click', function() {
//                 $('input[type="checkbox"]').prop('checked', false);
//             });
//         }
// }


$(function () {
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
    });

    $('a[href^="http://geoffreyleung.com/hogwarts-central"]').attr('target', '_blank');
    $('a[href^="http://geoffreyleung.com/shooting"]').attr('target', '_blank');
    $('a[href^="http://geoffreyleung.com/decision-maker"]').attr('target', '_blank');
    $('a[href^="http://geoffreyleung.com/discover-events"]').attr('target', '_blank');
    $('a[href^="http://geoffreyleung.com/slice-finder"]').attr('target', '_blank');
    $('a[href^="http://geoffreyleung.com/coursea"]').attr('target', '_blank');

    textChange();
    navCollapse();
    // clickOutside();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxhQUFhLFNBQWIsVUFBYSxHQUFXO0FBQzFCLFFBQU0sT0FBTyxFQUFFLE9BQUYsRUFBVyxNQUFYLEdBQW9CLEdBQWpDO0FBQ0EsUUFBTSxPQUFPLEVBQUUsVUFBRixFQUFjLE1BQWQsR0FBdUIsR0FBcEM7O0FBRUEsTUFBRSxRQUFGLEVBQVksTUFBWixDQUFtQixZQUFXO0FBQzVCLFlBQU0sWUFBWSxFQUFFLFFBQUYsRUFBWSxTQUFaLEVBQWxCO0FBQ0EsWUFBSSxhQUFhLElBQWIsSUFBcUIsWUFBWSxJQUFyQyxFQUEyQztBQUN6QyxjQUFFLGNBQUYsRUFBa0IsR0FBbEIsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBL0I7QUFDQSxjQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsV0FBckIsRUFBa0MsWUFBVztBQUN6QyxrQkFBRSxJQUFGLEVBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsTUFBckI7QUFDSCxhQUZEO0FBR0EsY0FBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLFVBQXJCLEVBQWlDLFlBQVc7QUFDeEMsa0JBQUUsSUFBRixFQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLFNBQXJCO0FBQ0gsYUFGRDtBQUdELFNBUkQsTUFRTyxJQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDM0IsY0FBRSxjQUFGLEVBQWtCLEdBQWxCLENBQXNCLE9BQXRCLEVBQStCLE1BQS9CO0FBQ0EsY0FBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLFdBQXJCLEVBQWtDLFlBQVc7QUFDekMsa0JBQUUsSUFBRixFQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLE1BQXJCO0FBQ0gsYUFGRDtBQUdBLGNBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixVQUFyQixFQUFpQyxZQUFXO0FBQ3hDLGtCQUFFLElBQUYsRUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixNQUFyQjtBQUNILGFBRkQ7QUFHRDtBQUNGLEtBbkJEO0FBb0JILENBeEJEOztBQTBCQSxJQUFNLGNBQWMsU0FBZCxXQUFjLEdBQVc7QUFDM0IsUUFBTSxhQUFhLEVBQUUsTUFBRixFQUFVLEtBQVYsRUFBbkI7QUFDQSxRQUFNLFlBQVksR0FBbEI7O0FBRUEsUUFBSSxjQUFjLFNBQWxCLEVBQTZCO0FBQ3pCLFVBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFXO0FBQ3JDLGNBQUUsd0JBQUYsRUFBNEIsSUFBNUIsQ0FBaUMsU0FBakMsRUFBNEMsS0FBNUM7QUFDSCxTQUZEO0FBR0g7QUFDSixDQVREOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEVBQUUsWUFBVztBQUNULE1BQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGNBQXhCLEVBQXdDLFVBQVMsQ0FBVCxFQUFZO0FBQ2hELFVBQUUsY0FBRjs7QUFFQSxVQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDcEIsdUJBQVcsRUFBRSxFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQWEsTUFBYixDQUFGLEVBQXdCLE1BQXhCLEdBQWlDO0FBRHhCLFNBQXhCLEVBRUcsSUFGSDtBQUdILEtBTkQ7O0FBUUEsTUFBRSxzREFBRixFQUEwRCxJQUExRCxDQUErRCxRQUEvRCxFQUF5RSxRQUF6RTtBQUNBLE1BQUUsOENBQUYsRUFBa0QsSUFBbEQsQ0FBdUQsUUFBdkQsRUFBaUUsUUFBakU7QUFDQSxNQUFFLG9EQUFGLEVBQXdELElBQXhELENBQTZELFFBQTdELEVBQXVFLFFBQXZFO0FBQ0EsTUFBRSxxREFBRixFQUF5RCxJQUF6RCxDQUE4RCxRQUE5RCxFQUF3RSxRQUF4RTtBQUNBLE1BQUUsa0RBQUYsRUFBc0QsSUFBdEQsQ0FBMkQsUUFBM0QsRUFBcUUsUUFBckU7QUFDQSxNQUFFLDZDQUFGLEVBQWlELElBQWpELENBQXNELFFBQXRELEVBQWdFLFFBQWhFOztBQUVBO0FBQ0E7QUFDQTtBQUNILENBbkJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHRleHRDaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHRvcDEgPSAkKCcjaG9tZScpLm9mZnNldCgpLnRvcDtcclxuICAgIGNvbnN0IHRvcDIgPSAkKCcjY29udGFjdCcpLm9mZnNldCgpLnRvcDtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxQb3MgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcclxuICAgICAgaWYgKHNjcm9sbFBvcyA+PSB0b3AxICYmIHNjcm9sbFBvcyA8IHRvcDIpIHtcclxuICAgICAgICAkKCdhW2hyZWZePVwiI1wiXScpLmNzcygnY29sb3InLCAnIzgwODA4MCcpO1xyXG4gICAgICAgICQoJ2FbaHJlZl49XCIjXCJdJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnY29sb3InLCAnIzMzMycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnYVtocmVmXj1cIiNcIl0nKS5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2NvbG9yJywgJyM4MDgwODAnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPiB0b3AyKSB7XHJcbiAgICAgICAgJCgnYVtocmVmXj1cIiNcIl0nKS5jc3MoJ2NvbG9yJywgJyNEREQnKTtcclxuICAgICAgICAkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2NvbG9yJywgJyM5OTknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnY29sb3InLCAnI0RERCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IG5hdkNvbGxhcHNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB3aW5kb3dTaXplID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICBjb25zdCBtaW5XaW5kb3cgPSA2NzA7XHJcblxyXG4gICAgaWYgKHdpbmRvd1NpemUgPD0gbWluV2luZG93KSB7XHJcbiAgICAgICAgJCgnYVtocmVmXj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgY2xpY2tPdXRzaWRlID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgY29uc3Qgb3BlbmVkID0gJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuYXR0cignY2hlY2tlZCcpO1xyXG4vLyAgICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcclxuLy8gICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2FbaHJlZl49XCIjXCJdJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3BcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2FbaHJlZl49XCJodHRwOi8vZ2VvZmZyZXlsZXVuZy5jb20vaG9nd2FydHMtY2VudHJhbFwiXScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuICAgICQoJ2FbaHJlZl49XCJodHRwOi8vZ2VvZmZyZXlsZXVuZy5jb20vc2hvb3RpbmdcIl0nKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7XHJcbiAgICAkKCdhW2hyZWZePVwiaHR0cDovL2dlb2ZmcmV5bGV1bmcuY29tL2RlY2lzaW9uLW1ha2VyXCJdJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO1xyXG4gICAgJCgnYVtocmVmXj1cImh0dHA6Ly9nZW9mZnJleWxldW5nLmNvbS9kaXNjb3Zlci1ldmVudHNcIl0nKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7XHJcbiAgICAkKCdhW2hyZWZePVwiaHR0cDovL2dlb2ZmcmV5bGV1bmcuY29tL3NsaWNlLWZpbmRlclwiXScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuICAgICQoJ2FbaHJlZl49XCJodHRwOi8vZ2VvZmZyZXlsZXVuZy5jb20vY291cnNlYVwiXScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuXHJcbiAgICB0ZXh0Q2hhbmdlKCk7XHJcbiAgICBuYXZDb2xsYXBzZSgpO1xyXG4gICAgLy8gY2xpY2tPdXRzaWRlKCk7XHJcbn0pOyJdfQ==
