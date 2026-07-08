# Räumungsservice Franken - Project Todos

## Completed
- [x] Cloned repository from GitHub
- [x] Installed dependencies with bun
- [x] Started development server
- [x] Compressed all gallery images (88-94% size reduction)
- [x] Converted images to WebP format for better performance
- [x] Updated Gallery component with 6 new project images
- [x] Fixed gallery grid layout for responsive display
- [x] Added smooth scroll to contact form when clicking CTA buttons
- [x] Created ScrollToForm component for handling hash navigation
- [x] Updated all /kontakt links to include #contact-form hash
- [x] Enhanced Gallery with interactive before/after comparison slider
- [x] Added keyboard navigation support (arrows + escape) to gallery
- [x] Implemented skeleton loading for gallery images
- [x] Enhanced Testimonials with detailed reviews and verified badges
- [x] Added auto-rotating testimonials with navigation dots
- [x] Improved Google Reviews badge with gradient glow effect
- [x] Clean Hero section with better text readability
- [x] Pushed code to GitHub repository
- [x] Created PWA manifest with app icons
- [x] Generated PNG icons from SVG (all sizes)
- [x] Added service worker for offline support
- [x] Created secret admin assets page (/admin/assets)
- [x] Updated FloatingButtons to hide on home page
- [x] Enhanced floating call/WhatsApp buttons (mobile-first, v2)
  - [x] Added bottom-sheet slide-up animation (mobile)
  - [x] Added scale/fade dialog animation (desktop)
  - [x] Added safe-area insets for notched devices
  - [x] Added prefers-reduced-motion support
  - [x] Verified confirmation dialog + exact phone/WhatsApp numbers

## In Progress
- [ ] None

## Notes
- Admin page password: RF2024Admin
- Admin page URL: /admin/assets
- PWA can be installed on mobile devices
- Floating buttons appear on all pages except home page

## PWA Features (v16)
- Web manifest with all icon sizes
- Service worker for offline caching
- App installable on mobile devices
- Apple Web App meta tags
- Theme color: #22955b (Primary green)

## Admin Assets Page
- Password protected access
- Download gallery images
- Download logo files (SVG, PNG)
- Download PWA manifest
- Session-based authentication

## Smooth Scroll Implementation
- ContactForm has id="contact-form" and scroll-mt-24 class
- ScrollToForm component listens for #contact-form hash and scrolls smoothly
- All CTA buttons now link to /kontakt#contact-form
- Global CSS already has scroll-behavior: smooth

## Gallery Enhancement (v10-v11)
- Interactive before/after comparison slider in lightbox
- Drag or touch to compare images
- Elegant hover effects with zoom icons
- Gallery navigation dots in lightbox
- Keyboard shortcuts: Left/Right arrows, Escape to close

## Testimonials Enhancement (v11)
- Three detailed testimonials with service tags
- Verified badges for authenticity
- Auto-rotate every 5 seconds
- Glassmorphism card design
- Enhanced Google Reviews badge

## Gallery Enhancement (v12)
- Clean Hero section with better text readability
- Pushed code to GitHub repository
- Created PWA manifest with app icons
- Generated PNG icons from SVG (all sizes)
- Added service worker for offline support
- Created secret admin assets page (/admin/assets)
- Updated FloatingButtons to hide on home page

## Notes
- Original images: 1.1MB - 1.6MB each (PNG)
- Optimized images: 64KB - 185KB each (WebP)
- Total savings: ~15MB reduced to ~1.5MB
- Gallery now shows 6 projects: Livingroom, Basement, Kitchen, Attic, Garden, Bedroom

- This is a German clearance/moving service website
- Built with Next.js 15, shadcn/ui, Tailwind CSS
- Contains before/after gallery images
- Multi-page site with services, locations, contact, and legal pages
