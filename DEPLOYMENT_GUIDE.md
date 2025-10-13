# 🚀 Website Deployment Guide

Your personal portfolio website is ready to deploy! Here are the easiest ways to get a shareable link:

## Option 1: Netlify Drop (Easiest - No Installation Required)

### Steps:
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Sign up for a free account (or log in)
3. **Drag and drop your entire `personal-website` folder** onto the page
4. Netlify will instantly deploy your site and give you a URL like: `https://your-site-name.netlify.app`
5. You can customize the site name in settings

**Time Required**: 2 minutes  
**Cost**: Free forever  
**Custom Domain**: Available

---

## Option 2: GitHub Pages (Most Popular)

### Prerequisites:
- Install Git: [https://git-scm.com/download/win](https://git-scm.com/download/win)
- Create a GitHub account: [https://github.com/join](https://github.com/join)

### Steps:
1. Open PowerShell in your website folder
2. Run these commands:

```bash
git init
git add .
git commit -m "Initial commit - My portfolio website"
```

3. Create a new repository on GitHub:
   - Go to [https://github.com/new](https://github.com/new)
   - Name it: `portfolio` or `personal-website`
   - Don't initialize with README
   - Click "Create repository"

4. Connect and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

5. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main → / (root)
   - Click Save

6. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

**Time Required**: 10 minutes  
**Cost**: Free  
**Custom Domain**: Available

---

## Option 3: Vercel (Fast & Modern)

### Steps:
1. Go to [https://vercel.com/signup](https://vercel.com/signup)
2. Sign up with GitHub, GitLab, or email
3. Click "Add New Project"
4. Import your GitHub repository (or drag & drop files)
5. Click "Deploy"
6. Get your URL: `https://your-site.vercel.app`

**Time Required**: 5 minutes  
**Cost**: Free  
**Custom Domain**: Available

---

## Option 4: Render (Alternative)

### Steps:
1. Go to [https://render.com/](https://render.com/)
2. Sign up for free
3. Click "New Static Site"
4. Connect your GitHub repository
5. Deploy and get your URL

---

## 📝 Before Deploying - Checklist

- [ ] Replace `profile.jpg` with your actual profile photo
- [ ] Test the website locally by opening `index.html` in a browser
- [ ] Update any placeholder text or links
- [ ] Verify all social media links are correct
- [ ] Check that all project links point to your GitHub

---

## 🎨 Adding Your Profile Picture

Your profile picture should be:
- **Format**: JPG, PNG, or WebP
- **Size**: 300x300 pixels (or larger, will be resized)
- **File name**: `profile.jpg` (or update the HTML if using a different name)
- **Location**: Same folder as `index.html`

To add your picture:
1. Copy your photo to the website folder
2. Rename it to `profile.jpg`
3. Or update line 74 in `index.html`:
   ```html
   <img src="your-photo-name.jpg" alt="Ashlesha Saxena" class="profile-img">
   ```

---

## 🔗 Recommended: Netlify Drop (Quickest)

For the fastest deployment with zero setup:

1. Visit: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Create a free account
3. Drag your `personal-website` folder onto the page
4. Get your instant shareable link!

You can update your site anytime by dragging the folder again.

---

## 💡 Tips

- **Custom Domain**: All platforms above support custom domains (e.g., `ashleshasaxena.com`)
- **HTTPS**: All platforms provide free SSL certificates
- **Updates**: Simply re-upload or push changes to update your site
- **Analytics**: Add Google Analytics to track visitors

---

## 🆘 Need Help?

If you encounter any issues:
1. Make sure all files are in the same folder
2. Check that `profile.jpg` exists
3. Test locally first by opening `index.html`
4. Ensure no files are missing

---

**Recommended for you**: Use **Netlify Drop** - it's the fastest and requires no technical setup!
