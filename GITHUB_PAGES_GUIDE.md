# GitHub Pages Deployment Guide

## 🚀 Enabling GitHub Pages for Your Birthday Website

### Step-by-Step Instructions

#### 1. Access Repository Settings
- Go to your repository: `https://github.com/a-dhadwad/shravani-birthday`
- Click on **Settings** tab (gear icon)
- Scroll down to **"Pages"** section in the left sidebar

#### 2. Configure GitHub Pages
- Under **"Build and deployment"** section
- **Source**: Select **"Deploy from a branch"**
- **Branch**: Select **"main"**
- **Folder**: Select **"/ (root)"**
- Click **Save**

#### 3. Wait for Deployment
- GitHub will automatically build and deploy
- Status will show: "Your site is live at https://a-dhadwad.github.io/shravani-birthday/"
- This may take 1-2 minutes
- You'll receive an email confirmation

#### 4. Access Your Website
- Visit: **https://a-dhadwad.github.io/shravani-birthday/**
- Share this link with your special someone!

### Verification Checklist

- ✅ Repository is public
- ✅ index.html is in root folder
- ✅ style.css is in root folder
- ✅ script.js is in root folder
- ✅ assets/ folder is present with subfolders
- ✅ .nojekyll file exists (prevents Jekyll processing)
- ✅ All files committed to main branch

### Troubleshooting

#### Website shows 404
- Verify repository is PUBLIC (not private)
- Check that index.html is in the root directory
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 5 minutes for deployment to complete

#### Styles/Scripts not loading
- Verify CSS and JS files are linked correctly in index.html
- Check browser console (F12) for 404 errors
- Ensure all paths are relative (not absolute)

#### Images not showing
- Verify images are in `assets/images/` folder
- Check that image paths in index.html are correct
- Ensure image files are committed to repository

#### Music not playing
- Add music file to `assets/music/romantic-piano.mp3`
- Verify file format is MP3
- Check browser autoplay permissions
- Test on different browser

### Custom Domain (Optional)

If you want to use a custom domain:

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Update your domain's DNS records to point to GitHub Pages
4. DNS records to add:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   CNAME: a-dhadwad.github.io
   ```
5. GitHub will automatically enable HTTPS (SSL certificate)

### Updating Your Website

After deploying:

1. **Customize content** (edit index.html)
2. **Commit changes**: `git add . && git commit -m "Update message"`
3. **Push to GitHub**: `git push origin main`
4. **Wait 1-2 minutes** for automatic redeploy
5. **Refresh** your GitHub Pages URL

### Performance Optimization

#### Optimize Images
```bash
# Using ImageOptim (Mac)
open -a ImageOptim assets/images/

# Using ImageMagick (Linux/Windows)
convert input.jpg -resize 800x800 -quality 85 output.jpg
```

#### Compress CSS/JS (Optional)
- Use online tools like TinyCSS or UglifyJS
- Or use build tools: webpack, gulp, or ParcelJS

#### Monitor Performance
- Use Google PageSpeed Insights
- Check GitHub Pages build logs
- Monitor Core Web Vitals

### Monitoring

Check deployment status:
1. Go to repository → **Actions** tab
2. View latest workflow run
3. Check build logs for errors

### FAQs

**Q: How do I update my website after deploying?**
A: Make changes locally, commit to Git, push to GitHub, and wait 1-2 minutes for automatic redeploy.

**Q: Can I use HTTPS?**
A: Yes! GitHub Pages automatically provides HTTPS for github.io domains. Custom domains need manual setup.

**Q: Why are my changes not showing?**
A: Clear browser cache (Ctrl+Shift+Delete) and wait for deployment to complete.

**Q: Can I add a contact form?**
A: GitHub Pages only serves static files. Use services like Formspree or Netlify for forms.

**Q: Is there a bandwidth limit?**
A: No, GitHub Pages has unlimited bandwidth for public repositories.

### Need Help?

- GitHub Pages Official Docs: https://pages.github.com/
- GitHub Docs: https://docs.github.com/en/pages
- Community Support: https://github.community/

---

**Your website is ready! 🎉 Visit it at: https://a-dhadwad.github.io/shravani-birthday/**
