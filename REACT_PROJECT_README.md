# Portfolio Website - React + Node.js

A modern, full-stack portfolio website built with React frontend and Node.js backend with MongoDB for data storage.

## 🚀 Features

### Frontend (React)
- ✨ Modern, responsive design with smooth animations
- 🎨 Beautiful gradient color scheme (pink/beige theme)
- 📱 Mobile-friendly with hamburger menu
- 🚀 Fast performance using Vite
- 📧 Contact form with real-time validation
- 🎯 Smooth scrolling navigation
- 💼 Comprehensive sections: Hero, About, Education, Experience, Projects, Contact

### Backend (Node.js + Express)
- 🔒 Secure API with Helmet.js
- 📝 MongoDB database for storing contact form submissions
- ✅ Input validation with express-validator
- 🌐 CORS enabled for frontend communication
- 📊 RESTful API endpoints
- 🔍 Query filtering and pagination

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
  - OR use MongoDB Atlas (cloud database) - [Sign up](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** package manager
- **Git** (optional, for version control)

## 🛠️ Installation & Setup

### 1. Clone or Download the Project

```bash
cd personal-website
```

### 2. Backend Setup

#### Install Backend Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/portfolio
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

#### Start MongoDB (if using local installation)
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

#### Start Backend Server
```bash
npm run dev
# or for production
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

#### Install Frontend Dependencies
Open a new terminal and navigate to the frontend directory:

```bash
cd react-frontend
npm install
```

#### Configure Environment Variables (Optional)
Create a `.env` file in the `react-frontend` directory:

```bash
cp .env.example .env
```

Edit if needed:
```env
VITE_API_URL=http://localhost:5000
```

#### Start Frontend Development Server
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🎯 Usage

1. **Start the Backend** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Frontend** (Terminal 2):
   ```bash
   cd react-frontend
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

4. **Test the contact form** by filling it out and submitting

## 📁 Project Structure

```
personal-website/
├── backend/                    # Node.js Backend
│   ├── models/
│   │   └── Contact.js         # MongoDB Contact model
│   ├── routes/
│   │   └── contact.js         # Contact API routes
│   ├── server.js              # Express server setup
│   ├── package.json           # Backend dependencies
│   └── .env.example           # Environment variables template
│
├── react-frontend/            # React Frontend
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx           # Main app component
│   │   ├── App.css           # App styles
│   │   ├── index.css         # Global styles
│   │   └── main.jsx          # Entry point
│   ├── index.html            # HTML template
│   ├── vite.config.js        # Vite configuration
│   └── package.json          # Frontend dependencies
│
├── index.html                 # Original static HTML (reference)
├── styles.css                 # Original CSS (reference)
├── script.js                  # Original JS (reference)
└── REACT_PROJECT_README.md   # This file
```

## 🔌 API Endpoints

### Contact Form

#### Submit Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Hello, I would like to connect..."
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Thank you for your message! I will get back to you soon.",
  "data": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Get All Contact Messages (Admin)
```
GET /api/contact?status=new&limit=50&page=1
```

#### Get Single Contact Message
```
GET /api/contact/:id
```

#### Update Contact Status
```
PATCH /api/contact/:id
Content-Type: application/json

{
  "status": "read"
}
```

#### Delete Contact Message
```
DELETE /api/contact/:id
```

### Health Check
```
GET /api/health
```

## 🎨 Customization

### Update Personal Information

1. **Edit Profile Image**: Place your image in `react-frontend/public/profile.jpg`

2. **Update Content**: Edit the component files in `react-frontend/src/components/`:
   - `Hero.jsx` - Name, title, tagline
   - `About.jsx` - Bio, skills
   - `Education.jsx` - Educational background
   - `Experience.jsx` - Work experience
   - `Projects.jsx` - Portfolio projects
   - `Contact.jsx` - Contact information

3. **Change Colors**: Edit CSS variables in `react-frontend/src/index.css`:
   ```css
   :root {
     --primary-color: #ff6b9d;
     --secondary-color: #c44569;
     /* ... */
   }
   ```

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)

1. **Build the frontend**:
   ```bash
   cd react-frontend
   npm run build
   ```

2. **Deploy the `dist` folder** to:
   - [Netlify](https://www.netlify.com/)
   - [Vercel](https://vercel.com/)
   - [GitHub Pages](https://pages.github.com/)

3. **Update environment variables** in your hosting platform

### Backend Deployment (Heroku/Railway/Render)

1. **Prepare for deployment**:
   - Ensure `.env` variables are set in hosting platform
   - Update `CLIENT_URL` to your frontend URL

2. **Deploy to**:
   - [Heroku](https://www.heroku.com/)
   - [Railway](https://railway.app/)
   - [Render](https://render.com/)
   - [DigitalOcean](https://www.digitalocean.com/)

3. **Use MongoDB Atlas** for production database

### Full Stack Deployment Example (Render)

1. **Backend**:
   - Create new Web Service on Render
   - Connect GitHub repository
   - Set build command: `cd backend && npm install`
   - Set start command: `cd backend && npm start`
   - Add environment variables

2. **Frontend**:
   - Create new Static Site on Render
   - Set build command: `cd react-frontend && npm install && npm run build`
   - Set publish directory: `react-frontend/dist`
   - Add environment variable: `VITE_API_URL=<your-backend-url>`

## 🧪 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:5000/api/health

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","subject":"Test","message":"This is a test message"}'
```

### View Contact Submissions in MongoDB
```bash
# Connect to MongoDB
mongosh

# Switch to portfolio database
use portfolio

# View all contacts
db.contacts.find().pretty()
```

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error**:
- Ensure MongoDB is running: `mongod` or check MongoDB Atlas connection string
- Verify `MONGODB_URI` in `.env` file

**Port Already in Use**:
- Change `PORT` in backend `.env` file
- Kill process using port 5000: `npx kill-port 5000`

### Frontend Issues

**API Connection Error**:
- Ensure backend is running on port 5000
- Check CORS settings in backend `server.js`
- Verify proxy settings in `vite.config.js`

**Build Errors**:
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

## 📦 Dependencies

### Backend
- express - Web framework
- mongoose - MongoDB ODM
- cors - Cross-origin resource sharing
- helmet - Security headers
- dotenv - Environment variables
- body-parser - Request body parsing
- express-validator - Input validation

### Frontend
- react - UI library
- react-dom - React DOM rendering
- react-icons - Icon library
- axios - HTTP client
- vite - Build tool

## 📝 License

MIT License - Feel free to use this project for your own portfolio!

## 👤 Author

**Ashlesha Saxena**
- GitHub: [@SAxenaAshlesha](https://github.com/SAxenaAshlesha)
- LinkedIn: [ashlesha-saxena](https://linkedin.com/in/ashlesha-saxena-a5078a240)
- Email: ashleshasaxena08@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Note**: The original static HTML version is preserved in the root directory for reference.
