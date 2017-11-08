'use strict';

/* Modal Image */

var imageModalWrap = document.createElement('div'),
    container = document.querySelectorAll('.vanilla-gallery')[0],
    images = document.querySelectorAll('.vanilla-modal-img'),
    html = void 0,
    imgUrl = void 0,
    imgAlt = void 0,
    imgText = void 0,
    closeBtn = void 0,
    figure = void 0;

images.forEach(function (image) {
    image.onclick = function (event) {

        imgUrl = event.target.dataset.url;
        imgAlt = event.target.alt;
        imgText = event.target.title;

        var newHtml = template(imgUrl, imgAlt, imgText);

        imageModalWrap.className = "image-modal show";
        imageModalWrap.innerHTML = newHtml;
        container.appendChild(imageModalWrap);

        closeBtn = document.querySelectorAll('.close')[0];
        figure = document.querySelectorAll('figure')[0];

        closeBtn.onclick = function () {
            return close();
        };
        imageModalWrap.onclick = function () {
            return close();
        };

        function close() {
            figure.classList.remove('zoom');
            figure.classList.add('zoom-out');
            imageModalWrap.classList.remove('show');
            setTimeout(function () {
                return imageModalWrap.remove();
            }, 500);
        }
    };
});

function template(url, alt, text) {
    html = '<div class="close">close</div>\n            <figure class="zoom">\n                <img src=" ' + url + ' " alt="' + alt + '">\n                <figcaption>' + text + '</figcaption>\n            </figure>';

    return html;
}