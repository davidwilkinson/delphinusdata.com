// Google Analytics 4 Configuration
// This matches Google's exact recommended implementation
const GA_MEASUREMENT_ID = 'G-19TN3BN6C7';

// Initialize Google Analytics - follows Google's recommended approach exactly
function initializeGoogleAnalytics() {
    // Load Google Analytics script (matches Google's recommendation)
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // Initialize dataLayer and gtag function (matches Google's code exactly)
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    
    // Make gtag globally available
    window.gtag = gtag;
}

// Execute immediately (matches Google's timing recommendation)
initializeGoogleAnalytics();

// Function to track 404 errors
function track404Error() {
    if (window.gtag) {
        gtag('event', 'page_view', {
            'page_title': '404 Error',
            'page_location': window.location.href,
            'custom_parameter': '404_error'
        });
    }
}

// Analytics is now initialized immediately above - no need for DOM ready check 