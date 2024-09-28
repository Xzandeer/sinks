function toggleOverlay(overlayId) {
    const clickedContainer = document.getElementById(overlayId).parentNode;

    if (clickedContainer.classList.contains('active')) {
        clickedContainer.classList.remove('active');
    } else {
        const imageContainers = document.querySelectorAll('.image-container');
        imageContainers.forEach(container => {
            container.classList.remove('active');
        });

        clickedContainer.classList.add('active');
    }
}
