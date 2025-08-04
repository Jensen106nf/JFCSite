# Jensen Floor Care Website

This is a complete replica of the Jensen Floor Care website (https://jensenfloorcare.jobbersites.com/) built with HTML, CSS, and JavaScript. The website maintains the exact same design, content, and functionality as the original template site.

## Project Structure

```
Jensen Floorcare Site/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Image assets (placeholders)
│       ├── logo.png        # Company logo
│       ├── hero-banner.jpg # Hero banner image
│       ├── featured-image.jpg
│       ├── about-image.jpg
│       ├── gallery-1.jpg through gallery-9.jpg
│       └── jobber-logo.svg
└── README.md               # This file
```

## Features

- **Exact Replica**: Maintains the same design, layout, and content as the original site
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Interactive Elements**: FAQ accordions, smooth scrolling, hover effects
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and semantic markup
- **Performance**: Optimized CSS and JavaScript for fast loading

## Content Sections

1. **Navigation Bar**: Fixed header with logo, phone number, and call-to-action buttons
2. **Hero Section**: Large banner image with overlay content
3. **Header Section**: Company information, tagline, and contact details
4. **Featured Content**: Key services and benefits with image
5. **Services Section**: List of offered services with checkmarks
6. **Image Gallery**: Recent work showcase (9 images)
7. **About Section**: Company information with owner photo
8. **FAQ Section**: Frequently asked questions with accordion functionality
9. **Contact Form**: Embedded Jobber form for free estimates
10. **Footer**: Contact information, social links, and powered by Jobber

## Business Information

- **Business Name**: Jensen Floorcare
- **Phone**: (563) 422-7789
- **Email**: brianjensen9@gmail.com
- **Service Area**: Northeast Iowa
- **Services**: Carpet Cleaning, Upholstery Cleaning, Stain & Spot Removal, Odor Removal & Mitigation, Hot Water Extraction & Very Low Moisture Cleaning, Strip & Wax Tile

## Image Requirements

The website requires the following images to be placed in the `assets/images/` directory:

### Required Images:
1. **logo.png** - Company logo (max 200px width, 50px height)
2. **hero-banner.jpg** - Hero banner image (aspect ratio 12:5, recommended 1920x800px)
3. **featured-image.jpg** - Featured content image (square, recommended 525x525px)
4. **about-image.jpg** - About section image (aspect ratio 5:4, recommended 600x480px)
5. **gallery-1.jpg through gallery-9.jpg** - Gallery images (various sizes)
6. **jobber-logo.svg** - Jobber logo for footer

### How to Obtain Original Images:

1. **From the Template Site**: Visit https://jensenfloorcare.jobbersites.com/ and:
   - Right-click on images and "Save Image As..."
   - Use browser developer tools to inspect image URLs
   - Download images from the original URLs

2. **Image URLs from Template**:
   - Logo: `https://jobber.s3.amazonaws.com/work_configuration_logos/1490753/original/Screen_Shot_2024-10-22_at_10.23.23_A.png`
   - Hero: `https://d13cw1lxlociqy.cloudfront.net/zoty79pw8sozoqbor4tukjoqdsw4`
   - Featured: `https://d13cw1lxlociqy.cloudfront.net/a6anqrpznfbkqife8sdmieu55adf`
   - About: `https://d13cw1lxlociqy.cloudfront.net/7zcuvpl5pa13qms09k9bz1708hzo`
   - Gallery images: Various URLs from the template site

3. **Alternative**: Use placeholder images with the same dimensions and descriptions until you can obtain the originals.

## Setup Instructions

### Prerequisites
- A modern web browser
- A local web server (optional, for testing)

### Installation

1. **Download/Clone the Project**:
   ```bash
   # If using git
   git clone [repository-url]
   cd "Jensen Floorcare Site"
   
   # Or simply download and extract the files
   ```

2. **Add Images**:
   - Place all required images in the `assets/images/` directory
   - Ensure image filenames match those referenced in the HTML

3. **Run the Website**:
   
   **Option A: Direct File Opening**
   - Simply double-click `index.html` to open in your browser
   - Note: Some features may not work without a local server

   **Option B: Local Server (Recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then open `http://localhost:8000` in your browser

### Testing

1. **Responsive Testing**: Test on various screen sizes
2. **Browser Testing**: Test in Chrome, Firefox, Safari, Edge
3. **Functionality Testing**:
   - Click all navigation links
   - Test FAQ accordion functionality
   - Verify contact form loads properly
   - Check smooth scrolling behavior

## Customization Options

### Colors
Edit the CSS variables in `assets/css/styles.css`:
```css
:root {
    --color-primary: #2563eb;        /* Primary blue */
    --color-primary-dark: #1d4ed8;   /* Darker blue for hover */
    --color-surface: #ffffff;         /* Background white */
    /* ... other colors */
}
```

### Content
- Update business information in `index.html`
- Modify service descriptions
- Add/remove FAQ items
- Update contact information

### Images
- Replace placeholder images with actual business photos
- Optimize images for web (compress, resize appropriately)
- Ensure all images have proper alt text

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, Grid, and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: Inter font family from Google Fonts
- **Icons**: SVG icons embedded in HTML

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Optimized CSS with efficient selectors
- Lazy loading for gallery images
- Debounced scroll events
- Minimal JavaScript footprint

## SEO and Accessibility

### SEO Features
- Semantic HTML structure
- Meta tags for description, keywords, and social sharing
- Structured data (JSON-LD) for FAQ
- Proper heading hierarchy
- Alt text for all images

### Accessibility Features
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast color scheme
- Proper semantic markup

## Deployment

### Static Hosting
The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository
- **AWS S3**: Upload files to a bucket
- **Traditional Web Hosting**: Upload via FTP

### Custom Domain
1. Purchase a domain name
2. Configure DNS settings
3. Update any hardcoded URLs in the code
4. Set up SSL certificate (recommended)

## Maintenance

### Regular Updates
- Keep contact information current
- Update gallery with recent work
- Refresh content as needed
- Monitor form submissions

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check mobile responsiveness
- Test loading speeds

## Support

For questions or issues:
1. Check the browser console for JavaScript errors
2. Verify all image files are in the correct location
3. Ensure the local server is running (if using one)
4. Test in different browsers

## License

This project is created for Jensen Floor Care. Please ensure you have the right to use any images and content included in this website.

---

**Note**: This website is a replica of the original Jensen Floor Care site. All business information, contact details, and content should be verified and updated as needed for your specific use case. 