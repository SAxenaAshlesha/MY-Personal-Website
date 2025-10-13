# Setup Instructions - React Portfolio with Node.js Backend

Follow these steps to get your portfolio website running locally.

## 📋 What You Need

Before starting, make sure you have:
- ✅ Node.js installed (v16 or higher) - [Download here](https://nodejs.org/)
- ✅ MongoDB installed OR a MongoDB Atlas account - [Get MongoDB](https://www.mongodb.com/)
- ✅ A code editor (VS Code recommended)
- ✅ A terminal/command prompt

## 🚀 Step-by-Step Setup

### Step 1: Open Two Terminals

You'll need two terminal windows - one for backend, one for frontend.

**In VS Code:** 
- Press `` Ctrl + ` `` to open terminal
- Click the `+` icon to open a second terminal

### Step 2: Setup Backend

In **Terminal 1**, run these commands:

```bash
# Navigate to backend folder
cd backend

# Install dependencies (this may take a minute)
npm install

# Create environment file
copy .env.example .env
```

Now edit the `backend/.env` file with your settings:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
```

**If using MongoDB Atlas (cloud):**
- Replace `MONGODB_URI` with your Atlas connection string
- Example: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`

### Step 3: Start MongoDB (if using local)

**Windows:**
```bash
# Option 1: Start as service
net start MongoDB

# Option 2: Run mongod directly
mongod
```

**macOS/Linux:**
```bash
# Start MongoDB service
sudo systemctl start mongod

# Or use brew (macOS)
brew services start mongodb-community
```

**Skip this step if using MongoDB Atlas!**

### Step 4: Start Backend Server

In **Terminal 1**, run:
```bash
npm run dev
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server is running on port 5000
📍 Environment: development
🔗 API URL: http://localhost:5000
```

✅ **Backend is ready!** Keep this terminal running.

### Step 5: Setup Frontend

In **Terminal 2**, run these commands:

```bash
# Navigate to frontend folder
cd react-frontend

# Install dependencies (this may take a minute)
npm install
```

### Step 6: Add Your Profile Picture

Copy your profile picture to:
```
react-frontend/public/profile.jpg
```

Or use the existing one from the root directory:
```bash
# Windows
copy ..\profile.jpg public\profile.jpg

# macOS/Linux
cp ../profile.jpg public/profile.jpg
```

### Step 7: Start Frontend Server

In **Terminal 2**, run:
```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

✅ **Frontend is ready!**

### Step 8: Open Your Browser

1. Open your browser
2. Go to: `http://localhost:3000`
3. You should see your portfolio website! 🎉

## ✅ Test Everything Works

### Test 1: Check Backend Health
Open in browser: `http://localhost:5000/api/health`

Should show:
```json
{
  "status": "success",
  "message": "Server is running",
  "timestamp": "..."
}
```

### Test 2: Submit Contact Form
1. Scroll to the "Get In Touch" section
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test
   - Message: This is a test message
3. Click "Send Message"
4. You should see: "Thank you for your message! I will get back to you soon."

### Test 3: View Submission in Database

Open a new terminal and run:
```bash
# Connect to MongoDB
mongosh

# Switch to portfolio database
use portfolio

# View all contacts
db.contacts.find().pretty()
```

You should see your test submission!

## 🎨 Customize Your Portfolio

Now that everything is running, customize it with your information:

### 1. Update Personal Info

**Hero Section** - `react-frontend/src/components/Hero.jsx`:
```jsx
<h1>Hi, I'm <span className="highlight">Your Name</span></h1>
<p className="tagline">Your Title | Your Skills</p>
```

**About Section** - `react-frontend/src/components/About.jsx`:
- Update bio paragraphs
- Modify skills array

**Contact Section** - `react-frontend/src/components/Contact.jsx`:
- Update email address
- Update phone number
- Update social media links

### 2. Update Education

Edit `react-frontend/src/components/Education.jsx`:
- Modify the `educationData` array with your education details

### 3. Update Experience

Edit `react-frontend/src/components/Experience.jsx`:
- Modify the `experienceData` array with your work experience

### 4. Update Projects

Edit `react-frontend/src/components/Projects.jsx`:
- Modify the `projectsData` array with your projects
- Update GitHub links

### 5. Change Colors (Optional)

Edit `react-frontend/src/index.css`:
```css
:root {
  --primary-color: #ff6b9d;      /* Change to your color */
  --secondary-color: #c44569;    /* Change to your color */
  /* ... */
}
```

## 🐛 Troubleshooting

### Problem: "MongoDB connection error"

**Solution:**
1. Make sure MongoDB is running:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl status mongod
   ```
2. Check your `MONGODB_URI` in `backend/.env`
3. If using Atlas, verify your connection string and IP whitelist

### Problem: "Port 5000 already in use"

**Solution:**
1. Kill the process using port 5000:
   ```bash
   npx kill-port 5000
   ```
2. Or change the port in `backend/.env`:
   ```env
   PORT=5001
   ```

### Problem: "Cannot connect to backend"

**Solution:**
1. Make sure backend is running (Terminal 1)
2. Check if you can access: `http://localhost:5000/api/health`
3. Verify CORS settings in `backend/server.js`

### Problem: "Module not found" or build errors

**Solution:**
1. Delete node_modules and reinstall:
   ```bash
   # In backend folder
   rm -rf node_modules
   npm install
   
   # In react-frontend folder
   rm -rf node_modules
   npm install
   ```

### Problem: Profile picture not showing

**Solution:**
1. Make sure image is at: `react-frontend/public/profile.jpg`
2. Check image file name matches exactly (case-sensitive)
3. Try refreshing the browser with Ctrl+F5

## 📱 View on Mobile

1. Find your computer's IP address:
   ```bash
   # Windows
   ipconfig
   
   # macOS/Linux
   ifconfig | grep inet
   ```

2. Update `react-frontend/vite.config.js`:
   ```js
   server: {
     host: '0.0.0.0',
     port: 3000
   }
   ```

3. Restart frontend server

4. On your phone, open: `http://YOUR_IP_ADDRESS:3000`

## 🚀 Next Steps

Once everything is working:

1. ✅ Customize all content with your information
2. ✅ Test on different browsers (Chrome, Firefox, Safari)
3. ✅ Test on mobile devices
4. ✅ Review and update all sections
5. ✅ Deploy to production (see REACT_PROJECT_README.md)

## 📚 Additional Resources

- **Full Documentation**: `REACT_PROJECT_README.md`
- **Quick Start Guide**: `QUICK_START_REACT.md`
- **Backend API Docs**: `backend/README.md`
- **Frontend Docs**: `react-frontend/README.md`

## 🆘 Still Need Help?

1. Check the error message carefully
2. Search for the error on Google/Stack Overflow
3. Review the documentation files
4. Check that all prerequisites are installed correctly

## 🎉 Success!

If you can see your portfolio at `http://localhost:3000` and the contact form works, you're all set! 

Now customize it and make it your own! 🚀

---

**Happy coding!** If you have any questions, refer to the detailed documentation files.
