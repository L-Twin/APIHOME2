document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-50.jpg',
        'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-10.jpg',
        'https://ferma-biz.ru/wp-content/uploads/2022/08/1476173418-111-2.jpg',
        'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696601503_gas-kvas-com-p-kartinki-s-kotenkom-28.jpg'
    ];

    const sliderImage = document.querySelector('.slider-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentIndex = 0;

    function showImage(index) {
        sliderImage.innerHTML = `<img src="${images[index]}" alt="Slide ${index + 1}">`;
        updateDots(index);
    }

    function updateDots(index) {
        const dots = Array.from(document.querySelectorAll('.slider-dot'));
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }

    function createDots() {
        for (let i = 0; i < images.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('slider-dot');
            dot.addEventListener('click', () => showImage(i));
            dotsContainer.appendChild(dot);
        }
        updateDots(currentIndex);
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    createDots();
    showImage(currentIndex);
});