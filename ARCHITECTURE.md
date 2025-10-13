# Project Architecture

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         USER BROWSER                         │
│                    http://localhost:3000                     │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ HTTP Requests
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    REACT FRONTEND (Vite)                     │
│                                                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Header    │  │    Hero     │  │    About    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Education  │  │ Experience  │  │  Projects   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                               │
│  ┌─────────────┐  ┌─────────────┐                           │
│  │   Contact   │  │   Footer    │                           │
│  └─────────────┘  └─────────────┘                           │
│                                                               │
│              Axios HTTP Client (API Calls)                   │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ POST /api/contact
                           │ GET  /api/health
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  NODE.JS BACKEND (Express)                   │
│                    http://localhost:5000                     │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    Middleware                          │  │
│  │  • CORS          • Helmet       • Body Parser         │  │
│  │  • Validation    • Error Handler                      │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    API Routes                          │  │
│  │                                                         │  │
│  │  POST   /api/contact      - Submit form               │  │
│  │  GET    /api/contact      - Get all messages          │  │
│  │  GET    /api/contact/:id  - Get single message        │  │
│  │  PATCH  /api/contact/:id  - Update status             │  │
│  │  DELETE /api/contact/:id  - Delete message            │  │
│  │  GET    /api/health       - Health check              │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  Mongoose Models                       │  │
│  │                                                         │  │
│  │  Contact Model:                                        │  │
│  │  • name, email, subject, message                      │  │
│  │  • status, ipAddress, userAgent                       │  │
│  │  • timestamps                                          │  │
│  └───────────────────────────────────────────────────────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ Mongoose ODM
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                      MONGODB DATABASE                        │
│                  mongodb://localhost:27017                   │
│                                                               │
│  Database: portfolio                                         │
│  Collection: contacts                                        │
│                                                               │
│  Document Structure:                                         │
│  {                                                           │
│    _id: ObjectId,                                           │
│    name: String,                                            │
│    email: String,                                           │
│    subject: String,                                         │
│    message: String,                                         │
│    status: String,                                          │
│    ipAddress: String,                                       │
│    userAgent: String,                                       │
│    createdAt: Date,                                         │
│    updatedAt: Date                                          │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Directory Structure

```
personal-website/
│
├── react-frontend/                 # Frontend Application
│   ├── public/                     # Static Assets
│   │   ├── profile.jpg            # Profile picture
│   │   └── vite.svg               # Vite logo
│   │
│   ├── src/                        # Source Code
│   │   ├── components/            # React Components
│   │   │   ├── Header.jsx         # Navigation
│   │   │   ├── Header.css
│   │   │   ├── Hero.jsx           # Landing
│   │   │   ├── Hero.css
│   │   │   ├── About.jsx          # About section
│   │   │   ├── About.css
│   │   │   ├── Education.jsx      # Education
│   │   │   ├── Education.css
│   │   │   ├── Experience.jsx     # Experience
│   │   │   ├── Experience.css
│   │   │   ├── Projects.jsx       # Projects
│   │   │   ├── Projects.css
│   │   │   ├── Contact.jsx        # Contact form
│   │   │   ├── Contact.css
│   │   │   ├── Footer.jsx         # Footer
│   │   │   └── Footer.css
│   │   │
│   │   ├── App.jsx                # Main component
│   │   ├── App.css                # App styles
│   │   ├── index.css              # Global styles
│   │   └── main.jsx               # Entry point
│   │
│   ├── index.html                 # HTML template
│   ├── vite.config.js             # Vite config
│   ├── package.json               # Dependencies
│   ├── .eslintrc.cjs              # ESLint config
│   ├── .env.example               # Env template
│   ├── .gitignore                 # Git ignore
│   └── README.md                  # Frontend docs
│
├── backend/                        # Backend Application
│   ├── models/                    # Database Models
│   │   └── Contact.js             # Contact model
│   │
│   ├── routes/                    # API Routes
│   │   └── contact.js             # Contact routes
│   │
│   ├── server.js                  # Express server
│   ├── package.json               # Dependencies
│   ├── .env.example               # Env template
│   ├── .gitignore                 # Git ignore
│   └── README.md                  # Backend docs
│
├── Documentation Files
│   ├── SETUP_INSTRUCTIONS.md      # Setup guide
│   ├── REACT_PROJECT_README.md    # Full docs
│   ├── QUICK_START_REACT.md       # Quick start
│   ├── PROJECT_SUMMARY.md         # Summary
│   ├── CHECKLIST.md               # Checklist
│   └── ARCHITECTURE.md            # This file
│
└── Original Files (Reference)
    ├── index.html                 # Original HTML
    ├── styles.css                 # Original CSS
    ├── script.js                  # Original JS
    └── profile.jpg                # Profile pic
```

## 🔄 Data Flow

### Contact Form Submission Flow

```
1. USER fills out contact form
   └─> Contact.jsx component

2. USER clicks "Send Message"
   └─> handleSubmit() function

3. Form validation (client-side)
   └─> Check required fields
   └─> Validate email format

4. Axios POST request
   └─> POST /api/contact
   └─> Body: { name, email, subject, message }

5. Backend receives request
   └─> Express middleware processes
   └─> CORS check
   └─> Body parsing

6. Server-side validation
   └─> express-validator
   └─> Check all fields
   └─> Sanitize inputs

7. Create Contact document
   └─> new Contact({ ...data })
   └─> Add IP address
   └─> Add user agent

8. Save to MongoDB
   └─> contact.save()
   └─> Generate _id
   └─> Set timestamps

9. Send response to frontend
   └─> Status: 201 Created
   └─> Body: { status, message, data }

10. Frontend receives response
    └─> Display success message
    └─> Clear form
    └─> Update UI

11. Data persisted in MongoDB
    └─> Available for admin viewing
    └─> Can be queried later
```

## 🔌 Component Communication

```
┌─────────────────────────────────────────────────────────┐
│                         App.jsx                          │
│                    (Main Container)                      │
│                                                           │
│  State: isLoaded                                         │
│  Effect: Set loaded on mount                             │
└───────────────────────┬─────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   Header     │ │     Main     │ │    Footer    │
│              │ │              │ │              │
│ • Nav links  │ │ • Hero       │ │ • Links      │
│ • Active     │ │ • About      │ │ • Social     │
│   section    │ │ • Education  │ │ • Copyright  │
│ • Mobile     │ │ • Experience │ │              │
│   menu       │ │ • Projects   │ │              │
│              │ │ • Contact    │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
                        │
        ┌───────────────┼───────────────┬───────────┐
        │               │               │           │
        ▼               ▼               ▼           ▼
┌──────────┐    ┌──────────┐    ┌──────────┐  ┌──────────┐
│   Hero   │    │  About   │    │Education │  │Experience│
│          │    │          │    │          │  │          │
│ • Intro  │    │ • Bio    │    │ • Cards  │  │ • Cards  │
│ • CTA    │    │ • Skills │    │ • Data   │  │ • Data   │
│ • Scroll │    │ • Image  │    │          │  │          │
└──────────┘    └──────────┘    └──────────┘  └──────────┘

        ┌───────────────┬───────────────┐
        │               │               │
        ▼               ▼               ▼
┌──────────┐    ┌──────────┐    ┌──────────┐
│ Projects │    │ Contact  │    │  Footer  │
│          │    │          │    │          │
│ • Cards  │    │ • Form   │    │ • Nav    │
│ • Links  │    │ • API    │    │ • Social │
│ • Tags   │    │ • State  │    │          │
└──────────┘    └──────────┘    └──────────┘
                     │
                     │ Axios
                     ▼
              ┌──────────────┐
              │   Backend    │
              │     API      │
              └──────────────┘
```

## 🎨 Styling Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     index.css                            │
│                  (Global Styles)                         │
│                                                           │
│  • CSS Variables (colors, fonts, etc.)                  │
│  • Reset styles                                          │
│  • Base typography                                       │
│  • Common animations                                     │
│  • Utility classes                                       │
└─────────────────────────────────────────────────────────┘
                           │
                           │ Imported by
                           ▼
┌─────────────────────────────────────────────────────────┐
│                      App.css                             │
│                 (App-level Styles)                       │
│                                                           │
│  • App container styles                                  │
│  • Button styles (.btn, .btn-primary, etc.)             │
│  • Highlight class                                       │
└─────────────────────────────────────────────────────────┘
                           │
                           │ Used by
                           ▼
┌─────────────────────────────────────────────────────────┐
│                 Component CSS Files                      │
│                                                           │
│  Header.css    - Navigation styles                      │
│  Hero.css      - Hero section styles                    │
│  About.css     - About section styles                   │
│  Education.css - Education card styles                  │
│  Experience.css- Experience card styles                 │
│  Projects.css  - Project card styles                    │
│  Contact.css   - Contact form styles                    │
│  Footer.css    - Footer styles                          │
└─────────────────────────────────────────────────────────┘

CSS Variables (from index.css):
┌─────────────────────────────────────────────────────────┐
│  --primary-color: #ff6b9d      (Pink)                   │
│  --secondary-color: #c44569    (Dark Pink)              │
│  --accent-color: #ffa8c5       (Light Pink)             │
│  --beige-color: #f5e6d3        (Beige)                  │
│  --light-pink: #fff0f5         (Very Light Pink)        │
│  --text-color: #2d3436         (Dark Gray)              │
│  --light-text: #636e72         (Gray)                   │
│  --background: #ffffff         (White)                   │
│  --light-bg: #fff5f7           (Light Pink BG)          │
│  --border-color: #ffe4e9       (Light Pink Border)      │
│  --shadow: 0 4px 12px rgba...  (Box Shadow)             │
│  --transition: all 0.3s ease   (Transition)             │
└─────────────────────────────────────────────────────────┘
```

## 🔐 Security Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Security Layers                       │
└─────────────────────────────────────────────────────────┘

Layer 1: Frontend Validation
├─ Client-side form validation
├─ Required field checks
├─ Email format validation
└─ Length restrictions

Layer 2: Network Security
├─ HTTPS (in production)
├─ CORS configuration
└─ Secure headers (Helmet.js)

Layer 3: Backend Validation
├─ express-validator
├─ Input sanitization
├─ Type checking
└─ Length validation

Layer 4: Database Security
├─ Mongoose schema validation
├─ MongoDB injection protection
├─ Connection string in .env
└─ Atlas IP whitelisting

Layer 5: Environment Security
├─ .env files (not in git)
├─ .gitignore configured
├─ Secrets management
└─ Environment-specific configs
```

## 📊 State Management

```
React Component State:
┌─────────────────────────────────────────────────────────┐
│ Header Component                                         │
│ ├─ isScrolled: boolean                                  │
│ ├─ isMobileMenuOpen: boolean                            │
│ └─ activeSection: string                                │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ Hero Component                                           │
│ └─ isVisible: boolean                                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ Contact Component                                        │
│ ├─ formData: { name, email, subject, message }         │
│ ├─ isSubmitting: boolean                                │
│ └─ submitStatus: { type, message } | null              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ App Component                                            │
│ └─ isLoaded: boolean                                    │
└─────────────────────────────────────────────────────────┘
```

## 🚀 Deployment Architecture

```
Production Setup:

┌─────────────────────────────────────────────────────────┐
│                    USER BROWSER                          │
│              https://yourportfolio.com                   │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│              NETLIFY/VERCEL (Frontend)                   │
│                                                           │
│  • CDN Distribution                                      │
│  • HTTPS Certificate                                     │
│  • Build: npm run build                                  │
│  • Serve: dist/ folder                                   │
└──────────────────────────┬──────────────────────────────┘
                           │
                           │ API Calls
                           ▼
┌─────────────────────────────────────────────────────────┐
│              RENDER/HEROKU (Backend)                     │
│                                                           │
│  • Node.js Runtime                                       │
│  • Environment Variables                                 │
│  • Auto-scaling                                          │
│  • Health Checks                                         │
└──────────────────────────┬──────────────────────────────┘
                           │
                           │ Database Connection
                           ▼
┌─────────────────────────────────────────────────────────┐
│              MONGODB ATLAS (Database)                    │
│                                                           │
│  • Cloud Database                                        │
│  • Automatic Backups                                     │
│  • Monitoring                                            │
│  • IP Whitelisting                                       │
└─────────────────────────────────────────────────────────┘
```

---

This architecture provides a scalable, maintainable, and secure foundation for your portfolio website!
