document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.distortion-container');

    containers.forEach(container => {
        const img1 = container.getAttribute('data-img1');
        const img2 = container.getAttribute('data-img2');
        const disp = container.getAttribute('data-disp');

        new hoverEffect({
            parent: container,
            intensity: 0.3,
            image1: img1,
            image2: img2,
            displacementImage: disp,
            imagesRatio: 9 / 16 // Adjust based on container aspect ratio
        });
    });
});
