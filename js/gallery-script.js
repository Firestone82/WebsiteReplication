// Hide skeleton when image is loaded
document.querySelectorAll('.gallery-item a').forEach(item => {
    const img = item.querySelector('img');
    img.onload = () => item.closest('.gallery-item').classList.remove('skeleton');
    img.src = img.getAttribute('src'); // Trigger image load
});

// Shows the full size image when clicked
document.querySelectorAll('.gallery-item a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const overlay = document.getElementById('gallery-overlay');
        const fullSizeImage = document.getElementById('full-size-image');

        fullSizeImage.src = this.children[0].src;
        overlay.style.display = 'flex';
    });
});

// Hide the overlay when clicked
document.getElementById('gallery-overlay').addEventListener('click', function() {
    this.style.display = 'none';
});