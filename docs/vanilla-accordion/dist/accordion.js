'use strict';

/* Acordion */
var accordions = document.querySelectorAll('.accordion'),
    accordionsArray = toArray(accordions),
    allBodies = document.querySelectorAll('.body'),
    allBodieArray = toArray(allBodies);

allBodieArray.map(function (body) {
    return slideUp(body, '1ms linear');
});

accordionsArray.map(function (accordion) {
    var titles = accordion.querySelectorAll('.title'),
        titlesArray = toArray(titles);

    titlesArray.map(function (title) {
        return title.addEventListener("click", function (event) {
            var that = event.target;

            if (that.classList.contains('active')) {
                that.classList.remove('active');
                slideUp(that.nextElementSibling);
            } else {
                toArray(accordion.querySelectorAll('.body')).map(function (item) {
                    return slideUp(item);
                });
                toArray(accordion.querySelectorAll('.title')).map(function (item) {
                    return item.classList.remove('active');
                });
                that.classList.add('active');
                slideDown(that.nextElementSibling);
            }
        });
    });
});

function toArray(arg) {
    return Array.prototype.slice.call(arg);
}

function slideDown(el, timing) {
    timing = timing || '300ms ease';

    // Get element height
    el.style.webkitTransition = 'initial';
    el.style.transition = 'initial';
    el.style.visibility = 'hidden';
    el.style.maxHeight = 'initial';
    var height = el.offsetHeight + 'px';
    el.style.removeProperty('visibility');
    el.style.maxHeight = '0';
    el.style.overflow = 'hidden';

    // Begin transition
    el.style.webkitTransition = 'max-height ' + timing + ', opacity ' + timing + '';
    el.style.transition = 'max-height ' + timing + ', opacity ' + timing + '';
    var endSlideDown = function endSlideDown() {
        el.style.removeProperty('-webkit-transition');
        el.style.removeProperty('transition');
        el.removeEventListener(transitionEvent('end'), endSlideDown);
    };
    requestAnimationFrame(function () {
        el.style.maxHeight = height;
        el.style.opacity = '1';
    });
}

function slideUp(el, timing) {
    timing = timing || '300ms ease';

    // Get element height
    el.style.webkitTransition = 'initial';
    el.style.transition = 'initial';
    var height = el.offsetHeight + 'px';
    el.style.maxHeight = height;
    el.style.overflow = 'hidden';

    // Begin transition
    el.style.webkitTransition = 'max-height ' + timing + ', opacity ' + timing + '';
    el.style.transition = 'max-height ' + timing + ', opacity ' + timing + '';
    var endSlideDown = function endSlideDown() {
        el.style.removeProperty('-webkit-transition');
        el.style.removeProperty('transition');
        el.removeEventListener(transitionEvent('end'), endSlideDown);
    };
    requestAnimationFrame(function () {
        el.style.maxHeight = '0';
        el.style.opacity = '0';
    });
}