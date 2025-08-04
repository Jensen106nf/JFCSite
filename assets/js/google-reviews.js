// Google Reviews Widget Integration
document.addEventListener('DOMContentLoaded', function() {
    // Google Reviews Widget
    const reviewsContainer = document.querySelector('.google-reviews-widget');
    
    if (reviewsContainer) {
        // Create the custom Google Reviews widget
        const widget = document.createElement('div');
        widget.className = 'google-reviews-embed';
        
        // Clean Google Maps Widget
        widget.innerHTML = `
            <div class="google-map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748513.3952569143!2d-92.48485062841392!3d42.875367398383005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb5a3baabad062f1%3A0xccac2cca7a93e722!2sJensen%20Floorcare%20LLC!5e0!3m2!1sen!2sus!4v1754328156103!5m2!1sen!2sus" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        `;
        
        // Replace the placeholder with the widget
        const placeholder = reviewsContainer.querySelector('.google-reviews-placeholder');
        if (placeholder) {
            placeholder.replaceWith(widget);
        }
    }
}); 