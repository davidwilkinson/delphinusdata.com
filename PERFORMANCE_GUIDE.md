# Delphinus Data Website - Performance Optimization Guide

## Overview
This guide provides recommendations for optimizing the performance of the Delphinus Data website.

## Current Performance Status

### Assets Audit (as of December 2024)
- **CSS**: main.css (4,716 lines) - Contains unused styles from HTML5 UP template
- **JavaScript**: Multiple separate files (jQuery, plugins)
- **Images**: Unoptimized PNG files
- **Fonts**: External Google Fonts loading

## Immediate Optimizations Implemented

### 1. Caching Headers
- Added cache control headers for static assets (1 year cache)
- Configured in both `.htaccess` and `_headers` files

### 2. Compression
- Enabled gzip compression for text-based assets
- Configured in `.htaccess` file

### 3. Security Headers
- Added Content Security Policy
- Implemented security headers to prevent attacks

## High Priority Recommendations

### 1. CSS Optimization
**Current**: 4,716 lines in main.css
**Recommendation**: Audit and remove unused CSS rules

**Steps**:
1. Use tools like PurgeCSS or UnCSS to identify unused styles
2. Remove unused template components (pagination, form styles not used)
3. Minify CSS files
4. Consider critical CSS extraction for above-the-fold content

**Estimated Impact**: 60-70% reduction in CSS size

### 2. Image Optimization
**Current**: Unoptimized PNG files
**Files to optimize**:
- `images/humn_example_web.png`
- `images/public_speaking_wide_web.png`
- `images/mymug_web.png`
- All constellation images

**Recommendations**:
- Convert to WebP format with PNG fallback
- Compress images (aim for <100KB each)
- Add responsive images with srcset
- Implement lazy loading

### 3. JavaScript Optimization
**Current**: 6 separate JavaScript files
**Recommendation**: Bundle and minify JavaScript

**Files**:
- jquery.min.js (already minified)
- jquery.scrollex.min.js
- jquery.scrolly.min.js
- browser.min.js
- breakpoints.min.js
- util.js
- main.js

**Steps**:
1. Combine non-essential scripts
2. Load non-critical scripts asynchronously
3. Consider modern alternatives to jQuery for simple tasks

### 4. Font Loading Optimization
**Current**: Google Fonts loaded via CSS import
**Recommendation**: Optimize font loading

**Implementation**:
```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load fonts with font-display: swap -->
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700&family=Source+Sans+Pro:wght@900&display=swap" rel="stylesheet">
```

## Medium Priority Recommendations

### 5. HTML Optimization
- Remove commented-out code blocks
- Minify HTML for production
- Add proper semantic markup where missing

### 6. Third-Party Scripts Optimization
**Current third-party scripts**:
- Google Analytics
- Google Calendar widget
- LinkedIn badges

**Recommendations**:
- Load Google Analytics with gtag
- Consider lazy loading LinkedIn badges
- Optimize Google Calendar integration

### 7. Progressive Web App Features
- Add service worker for caching
- Create app manifest
- Enable offline functionality for static content

## Performance Monitoring

### Tools to Use
1. **Google PageSpeed Insights**: Regular monitoring
2. **GTmetrix**: Detailed performance analysis
3. **WebPageTest**: Real-world performance testing
4. **Chrome DevTools**: Local performance debugging

### Key Metrics to Track
- **First Contentful Paint (FCP)**: Target < 1.8s
- **Largest Contentful Paint (LCP)**: Target < 2.5s
- **First Input Delay (FID)**: Target < 100ms
- **Cumulative Layout Shift (CLS)**: Target < 0.1

## Implementation Priority

### Phase 1 (Immediate - High Impact)
1. ✅ Implement caching headers
2. ✅ Enable compression
3. 🔄 Optimize images (WebP conversion)
4. 🔄 Remove unused CSS

### Phase 2 (Short Term - Medium Impact)
1. Bundle and minify JavaScript
2. Optimize font loading
3. Clean up HTML
4. Implement critical CSS

### Phase 3 (Long Term - Advanced)
1. Progressive Web App features
2. Service worker implementation
3. Advanced image optimization (responsive images)
4. Consider static site generator migration

## Specific CSS Classes to Review for Removal

Based on the template, these sections likely contain unused styles:

### Potentially Unused Components
- `.pagination` styles (not used in current site)
- Complex form styles (only basic contact used)
- `.table-wrapper` and table styles (no tables in content)
- Multiple `.col-*` grid classes (review which are actually used)
- Complex button variations (review which are needed)

### Keep These (Currently Used)
- `.post` and `.posts` styles
- Basic form styles (for contact)
- `.header`, `.nav`, `.main`, `.footer` layouts
- `.image` and `.icons` styles
- Basic grid system

## Performance Budget

### Target Metrics
- **Total Page Size**: < 1MB
- **CSS**: < 50KB (minified + gzipped)
- **JavaScript**: < 100KB (minified + gzipped)
- **Images**: < 500KB total
- **Load Time**: < 3 seconds on 3G

### Current Baseline (Estimated)
- **CSS**: ~120KB (main.css unminified)
- **JavaScript**: ~90KB (all scripts)
- **Images**: ~300KB (current PNGs)

## Tools and Commands

### CSS Optimization
```bash
# Install PurgeCSS
npm install -g purgecss

# Analyze unused CSS
purgecss --css assets/css/main.css --content *.html --output optimized/

# Minify CSS
npm install -g clean-css-cli
cleancss -o assets/css/main.min.css assets/css/main.css
```

### Image Optimization
```bash
# Install cwebp for WebP conversion
# Convert PNG to WebP
cwebp -q 80 images/source.png -o images/source.webp

# Optimize PNG files
optipng -o7 images/*.png
```

### Performance Testing
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run performance audit
lighthouse https://delphinusdata.com --output html --output-path report.html
```

## Notes

- This guide should be updated as optimizations are implemented
- Performance should be measured before and after each optimization
- Consider the trade-off between optimization effort and actual user benefit
- Prioritize optimizations that improve Core Web Vitals scores 