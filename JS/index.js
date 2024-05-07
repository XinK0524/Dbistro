document.addEventListener("DOMContentLoaded", function() {
    let divWidth = document.getElementById('sliderBoard').offsetWidth;
    let imgCount = document.querySelectorAll('.pic-group .pic').length;
    let contentButton = document.getElementById('contentButton');
    let contentButtonItems = [];

    for (let i = 0; i < imgCount; i++) {
        let span = document.createElement('span');
        contentButton.appendChild(span);
        contentButtonItems.push(span);
    }

    contentButtonItems[0].classList.add('clicked');

    let contentItems = document.querySelectorAll('.pic-group .pic');
    contentItems.forEach(function(item) {
        item.style.width = divWidth + 'px';
    });

    let content = document.getElementById('content');
    content.style.width = (divWidth * imgCount) + 'px';

    let index = 0;
    let timer;

    function startAutoSlide() {
        timer = setInterval(moveToNext, 5000);
    }

    startAutoSlide(); 

    contentButtonItems.forEach(function(button, idx) {
        button.addEventListener('click', function() {
            clearInterval(timer); 
            index = idx; 

            content.style.left = -divWidth * index + 'px';

            contentButtonItems.forEach(function(item, i) {
                if (i === index) {
                    item.classList.add('clicked');
                } else {
                    item.classList.remove('clicked');
                }
            });

            startAutoSlide(); 
        });
    });

    function moveToNext() {
        index = (index + 1) % imgCount; 

        content.style.left = -divWidth * index + 'px';

        contentButtonItems.forEach(function(item, i) {
            if (i === index) {
                item.classList.add('clicked');
            } else {
                item.classList.remove('clicked');
            }
        });
    }
});
