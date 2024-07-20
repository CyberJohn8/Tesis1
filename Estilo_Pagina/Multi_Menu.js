// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const submenuItems = document.querySelectorAll('.submenu li');
    const displayedImage = document.getElementById('displayedImage');

    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = item.getAttribute('data-image');
            displayedImage.src = imageSrc;
        });
    });
});
