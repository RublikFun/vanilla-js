/* Modal Image */

let imageModalWrap = document.createElement('div'),
    container = document.querySelectorAll('.vanilla-gallery')[0],
    images = document.querySelectorAll('.vanilla-modal-img'),
    html, imgUrl, imgAlt, imgText, closeBtn, figure;

images.forEach(function(image) {
    image.onclick = function(event) {

        imgUrl = event.target.dataset.url;
        imgAlt = event.target.alt;
        imgText = event.target.title;

        let newHtml = template(imgUrl, imgAlt, imgText);

        imageModalWrap.className = "image-modal show";
        imageModalWrap.innerHTML = newHtml;
        container.appendChild(imageModalWrap);

        closeBtn = document.querySelectorAll('.close')[0];
        figure = document.querySelectorAll('figure')[0];

        closeBtn.onclick = () => close();
        imageModalWrap.onclick = () => close();

        function close() {
            figure.classList.remove('zoom');
            figure.classList.add('zoom-out');
            imageModalWrap.classList.remove('show');
            setTimeout(() => imageModalWrap.remove(), 500);

        }

    }
});

function template(url, alt, text) {

    html = `<div class="close">close</div>
            <figure class="zoom">
                <img src=" ${url} " alt="${alt}">
                <figcaption>${text}</figcaption>
            </figure>`;

    return html;
}