# 🎂 Happy Birthday Shravani - Cinematic Birthday Website

✨ A premium, luxury, cinematic romantic birthday experience built with HTML, CSS, and JavaScript. Fully responsive, mobile-friendly, and ready for GitHub Pages deployment.

## 🌟 Features

### Cinematic Experience
- **9 Complete Scenes** with smooth transitions
- **Loading Screen** with animated stars and progress bar
- **Typewriter Text Effects** for romantic messaging
- **Glassmorphism Design** with backdrop filters
- **Premium Animations** including floating hearts, butterflies, fireworks, and confetti

### Interactive Elements
1. **Scene 1: The Beginning** - Starry night with moon and romantic text
2. **Scene 2: The Secret Gift** - Opening gift box with butterflies and sparkles
3. **Scene 3: Birthday Cake** - Animated cake with candle lighting sequence
4. **Scene 4: Happy Birthday Explosion** - Fireworks and confetti celebration
5. **Scene 5: Love Letter** - Handwritten letter with emotional message
6. **Scene 6: Photo Gallery** - Memory gallery with lightbox viewer
7. **Scene 7: Qualities** - Beautiful cards listing loved ones' qualities
8. **Scene 8: Birthday Sky** - Galaxy animation with stars
9. **Scene 9: Final Surprise** - Heart rain and continuous fireworks with final message

### Special Features
- 🎵 **Background Music Control** - Mute/unmute button with romantic piano music
- 🕯️ **Realistic Candle Animation** - Lighting and blowing out candles
- 💥 **Fireworks & Confetti** - Canvas-based particle effects
- 🦋 **Floating Elements** - Butterflies, hearts, and stars animations
- 📸 **Photo Gallery** - Interactive lightbox with navigation
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎨 **Glassmorphism** - Modern, elegant design with blur effects
- ⚡ **Optimized Performance** - Canvas animations and smooth transitions

## 🚀 Quick Start

### Option 1: View on GitHub Pages
1. Enable GitHub Pages in your repository settings
2. Visit `https://a-dhadwad.github.io/shravani-birthday/`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/a-dhadwad/shravani-birthday.git

# Navigate to the directory
cd shravani-birthday

# Start a local server (Python)
python -m http.server 8000

# Or use Node.js
npx http-server

# Open in browser
# http://localhost:8000
```

## ��� Customization Guide

### 1. Personalize the Text

Edit **index.html** and modify:

```html
<!-- Scene 1 text -->
<p class="typewriter-text" data-text="Your custom message here"></p>

<!-- Love Letter -->
<p class="letter-line">Your personalized message</p>

<!-- Final Message -->
<p>Your closing message</p>
```

### 2. Add Your Photos

**Replace placeholder images:**
- Go to `assets/images/`
- Replace the 6 memory images with your own photos (JPG/PNG)
- Photos should be at least 300x300px

**Edit index.html photo gallery:**
```html
<div class="photo-item">
    <img src="assets/images/memory-1.jpg" alt="Your caption">
    <div class="photo-overlay"></div>
</div>
```

### 3. Add Background Music

- Replace `assets/music/romantic-piano.mp3` with your own audio file
- Supported formats: MP3, WAV, OGG
- Recommended: Soft piano, instrumental, or romantic music
- File size should be optimized (< 5MB for web)

### 4. Modify Colors

Edit **style.css** root variables:

```css
:root {
    --primary-color: #ff1493;      /* Hot pink */
    --secondary-color: #ff69b4;    /* Light pink */
    --accent-gold: #ffd700;        /* Gold */
    --accent-purple: #b19cd9;      /* Light purple */
}
```

### 5. Change Qualities List

Edit **index.html** Scene 7:

```html
<div class="quality-card">
    <div class="quality-icon">😊</div>
    <div class="quality-text">Your quality here</div>
</div>
```

### 6. Update Final Messages

Edit **index.html** Scene 9 final message, letter content, and closing remarks.

## 📁 Project Structure

```
shravani-birthday/
├── index.html              # Main HTML file with all scenes
├── style.css               # Complete styling and animations
├── script.js               # All JavaScript functionality
├── README.md               # This file
├── .gitignore              # Git ignore file
└── assets/
    ├── images/             # Photo gallery images (6 photos)
    │   ├── memory-1.jpg
    │   ├── memory-2.jpg
    │   ├── memory-3.jpg
    │   ├── memory-4.jpg
    │   ├── memory-5.jpg
    │   └── memory-6.jpg
    ├── music/              # Background music
    │   └── romantic-piano.mp3
    └── fonts/              # Custom fonts (optional)
        └── README.txt
```

## 🎬 How to Use

1. **Open the website** - Open `index.html` in your browser
2. **Wait for loading** - The cinematic loading screen appears
3. **Press buttons** - Follow the on-screen buttons to progress through scenes
4. **Make a wish** - Blow the candles by clicking "Blow the Candles" button
5. **Explore memories** - Click on photos to view them in fullscreen
6. **Control music** - Click the speaker icon to mute/unmute background music
7. **Final surprise** - Enjoy continuous animations and heart rain
8. **Restart** - Click "Start Over" to begin again

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Opera (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimizations

- Canvas-based animations for smooth performance
- Lazy loading of assets
- CSS animations instead of JavaScript where possible
- Optimized image sizes
- Efficient particle systems

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Animations, transitions, glassmorphism
- **Vanilla JavaScript** - No dependencies
- **Canvas API** - Particle effects, fireworks, confetti
- **Web Audio API** - Sound effects

### File Sizes
- `index.html` - ~20 KB
- `style.css` - ~50 KB
- `script.js` - ~35 KB
- Total (without assets) - ~105 KB

## 🚀 Deployment Instructions

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and root folder
   - Save

2. **Wait for deployment**
   - GitHub will build and deploy automatically
   - Visit `https://your-username.github.io/shravani-birthday/`

3. **Custom Domain (Optional)**
   - In repository settings, add custom domain
   - Update DNS records accordingly

### Other Hosting

**Netlify:**
- Connect GitHub repository
- Deploy automatically on push

**Vercel:**
- Connect GitHub repository
- Deploy with one click

**Firebase Hosting:**
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

## 🎵 Adding Music

### Recommended Music Sources
- YouTube Audio Library (Free)
- Epidemic Sound
- Artlist
- FreePik Music
- Pixabay Music

### How to Add

1. Find royalty-free romantic music
2. Download as MP3 (44.1kHz, 128kbps recommended)
3. Place in `assets/music/romantic-piano.mp3`
4. Test in browser

### Audio Format Conversion

Using FFmpeg:
```bash
ffmpeg -i input-song.wav -codec:a libmp3lame -q:a 4 romantic-piano.mp3
```

## 🖼️ Image Optimization

### Recommended Specifications
- **Format**: JPG or WebP
- **Size**: 300x300px minimum
- **File Size**: < 200KB each
- **Quality**: 80-90% compression

### Using ImageMagick:
```bash
convert input.jpg -resize 300x300 -quality 85 memory-1.jpg
```

## 🐛 Troubleshooting

### Music not playing
- Check browser autoplay policy (click anywhere to enable)
- Verify file path is correct
- Use browser console for errors

### Images not showing
- Check file paths in index.html
- Ensure images are in `assets/images/` folder
- Verify image formats are supported (JPG, PNG)

### Animations stuttering
- Reduce number of particles in script.js
- Close other browser tabs
- Update graphics drivers

### Canvas effects not working
- Check browser supports Canvas API
- Verify JavaScript is enabled
- Check browser console for errors

## 📝 Customization Tips

1. **Change Theme Colors** - Edit CSS variables in `:root`
2. **Add More Qualities** - Copy quality-card HTML block
3. **Extend Scenes** - Add new scene sections and buttons
4. **Custom Fonts** - Add Google Fonts or local fonts
5. **Different Music** - Replace MP3 file with your choice
6. **Video Message** - Add iframe or video player to any scene

## 💝 Making It More Personal

- Write a custom letter in Scene 5
- Add inside jokes or special moments
- Use photos of meaningful memories
- Choose music she loves
- Include special dates or milestones
- Add custom quality cards
- Personalize final message

## 📞 Support & Issues

If you encounter any issues:

1. Check browser console (F12 → Console tab)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try different browser
4. Verify all files are in correct folders
5. Check file permissions

## 📄 License

Free to use for personal, non-commercial purposes.

## 🎉 Have Fun!

This website is designed to create a memorable, emotional, and beautiful birthday experience. Customize it, personalize it, and make it truly special!

---

**Created with ❤️ for a special someone.**

*Last Updated: 2026*
