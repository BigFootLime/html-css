document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img1, .img2, .img3, .img');

    images.forEach(img => {
        img.addEventListener('mouseover', () => document.body.classList.add('darken'));
        img.addEventListener('mouseout', () => document.body.classList.remove('darken'));
    });
});


// JavaScript:

// Function to check if element is in viewport
// JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    // Select the element that you want to observe
    const headsetContainer = document.querySelector('.container-transition-headset');

    const observer = new IntersectionObserver((entries) => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the zoom-in-view class to the img-headset element
                entry.target.querySelector('.img-headset').classList.add('zoom-in-view');
            } else {
                // Optional: Remove the class if you want the effect to reverse on scroll up
                entry.target.querySelector('.img-headset').classList.remove('zoom-in-view');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.4  // Trigger when 50% of the item is in the viewport
    });

    // Tell the observer which elements to track
    observer.observe(headsetContainer);
});

