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

$(document).ready(function() {
    $("#emailForm").submit(function(event) {
        event.preventDefault();
        
        const email = $("#email").val();
        
        $.ajax({
            type: "POST",
            url: "save_email.php",
            data: { email: email },
            dataType: "json",
            success: function(response) {
                if (response.success) {
                    // Show success message
                    $("#successMessage").show();
                    $("#errorMessage").hide();
                    $("#email").val('');
                    
                    // Hide success message after 5 seconds
                    setTimeout(function() {
                        $("#successMessage").hide();
                    }, 5000);
                } else {
                    // Show error message
                    $("#errorMessage").text(response.message || 'Error submitting email. Please try again.');
                    $("#errorMessage").show();
                    $("#successMessage").hide();
                }
            },
            error: function() {
                $("#errorMessage").text('Server error. Please try again later.');
                $("#errorMessage").show();
                $("#successMessage").hide();
            }
        });
    });
});