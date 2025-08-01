// This file contains the JavaScript code for the webpage. 
// It can be used to add interactivity, such as image galleries, animations, or any dynamic features you want to implement.

document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            // Example of a simple image click event
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const modalImg = document.createElement('img');
            modalImg.src = image.src;
            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});