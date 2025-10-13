# Quick Start Guide - React Portfolio

Get your portfolio up and running in 5 minutes!

## 🚀 Quick Setup

### Step 1: Install Dependencies

Open two terminal windows in the project root directory.

**Terminal 1 - Backend:**
```bash
cd backend
npm install
```

**Terminal 2 - Frontend:**
```bash
cd react-frontend
npm install
```

### Step 2: Setup MongoDB

Choose one option:

#### Option A: Local MongoDB
```bash
# Windows - Start MongoDB service
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

#### Option B: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `backend/.env` with your connection string

### Step 3: Configure Environment

**Backend** - Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
```

**Frontend** - Create `react-frontend/.env` (optional):
```env
VITE_API_URL=http://localhost:5000
```

### Step 4: Start the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server is running on port 5000
```

**Terminal 2 - Start Frontend:**
```bash
cd react-frontend
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

### Step 5: Open Your Browser

Navigate to `http://localhost:3000` and you should see your portfolio!

## ✅ Verify Everything Works

1. **Check Backend**: Open `http://localhost:5000/api/health`
   - Should see: `{"status":"success","message":"Server is running"}`

2. **Test Contact Form**:
   - Scroll to the Contact section
   - Fill out the form
   - Click "Send Message"
   - Should see success message

3. **View Submissions in MongoDB**:
   ```bash
   mongosh
   use portfolio
   db.contacts.find().pretty()
   ```

## 🎨 Customize Your Portfolio

### 1. Update Personal Info

Edit `react-frontend/src/components/Hero.jsx`:
```jsx
<h1>Hi, I'm <span className="highlight">Your Name</span></h1>
<p className="tagline">Your Title | Your Skills</p>
```

### 2. Add Your Profile Picture

Place your image at `react-frontend/public/profile.jpg`

### 3. Update Skills

Edit `react-frontend/src/components/About.jsx`:
```jsx
const skills = [
  'Your Skill 1', 'Your Skill 2', 'Your Skill 3'
  // ... add more
]
```

### 4. Update Education

Edit `react-frontend/src/components/Education.jsx` - modify the `educationData` array

### 5. Update Experience

Edit `react-frontend/src/components/Experience.jsx` - modify the `experienceData` array

### 6. Update Projects

Edit `react-frontend/src/components/Projects.jsx` - modify the `projectsData` array

### 7. Update Contact Info

Edit `react-frontend/src/components/Contact.jsx`:
```jsx
<span>your-email@example.com</span>
<span>+1 234 567 8900</span>
```

## 🐛 Common Issues

### "MongoDB connection error"
- **Solution**: Make sure MongoDB is running or check your Atlas connection string

### "Port 5000 already in use"
- **Solution**: Change the port in `backend/.env` to a different number (e.g., 5001)

### "Cannot connect to backend"
- **Solution**: Ensure backend is running and check the URL in `vite.config.js` proxy settings

### "Module not found"
- **Solution**: Delete `node_modules` and run `npm install` again

## 📱 Test on Mobile

1. Find your local IP address:
   ```bash
   # Windows
   ipconfig
   
   # macOS/Linux
   ifconfig
   ```

2. Update `vite.config.js`:
   ```js
   server: {
     host: '0.0.0.0',
     port: 3000
   }
   ```

3. Access from mobile: `http://YOUR_IP:3000`

## 🚀 Deploy Your Portfolio

### Frontend (Netlify - Free)

1. Build your project:
   ```bash
   cd react-frontend
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Backend (Render - Free)

1. Push your code to GitHub
2. Go to [Render.com](https://render.com)
3. Create new Web Service
4. Connect your GitHub repo
5. Set:
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
6. Add environment variables from your `.env` file

### Database (MongoDB Atlas - Free)

1. Already set up in Step 2!
2. Just use your Atlas connection string in Render environment variables

## 🎉 You're Done!

Your portfolio is now live! Share it with the world:
- Add it to your resume
- Share on LinkedIn
- Add to your GitHub profile

## 📚 Next Steps

- [ ] Customize colors and styling
- [ ] Add more projects
- [ ] Set up Google Analytics
- [ ] Add a blog section
- [ ] Implement admin dashboard to view contact submissions
- [ ] Add email notifications for new contact form submissions

## 💡 Tips

- **Keep it updated**: Regularly update your projects and experience
- **Test on multiple devices**: Ensure it looks good on mobile, tablet, and desktop
- **SEO**: Add meta tags for better search engine visibility
- **Performance**: Optimize images and use lazy loading
- **Accessibility**: Ensure your site is accessible to all users

## 🆘 Need Help?

- Check the full README: `REACT_PROJECT_README.md`
- Review the original HTML version for reference
- Check component documentation in each `.jsx` file

---

Happy coding! 🚀
