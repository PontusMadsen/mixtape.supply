document.addEventListener('DOMContentLoaded', () => {
	/**
	 * Remove preload
	 */
	document.getElementsByTagName("BODY")[0].classList.remove('preload');

	/**
	 * IE support for object-fit
	 */
	objectFitImages();

});


// script.js
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Function to hide the preloader
    function hidePreloader() {
        preloader.style.display = 'none';
        content.style.display = 'flex';
    }

    // Check if all images are loaded
    const images = document.images;
    let loadedImages = 0;
    const totalImages = images.length;

    for (let i = 0; i < totalImages; i++) {
        if (images[i].complete) {
            loadedImages++;
        } else {
            images[i].addEventListener('load', function() {
                loadedImages++;
                if (loadedImages === totalImages) {
                    hidePreloader();
                }
            });
        }
    }

    // If all images are already loaded
    if (loadedImages === totalImages) {
        hidePreloader();
    }
});