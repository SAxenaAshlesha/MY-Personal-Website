# Portfolio Frontend - React Application

A modern, responsive portfolio website built with React and Vite for Ashlesha Saxena.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful gradient color scheme
- 📱 Mobile-friendly navigation
- 🚀 Fast performance with Vite
- 📧 Contact form with backend integration
- 🎯 Smooth scrolling and animations
- 💼 Sections: Hero, About, Education, Experience, Projects, Contact

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running on port 5000

## Installation

1. Navigate to the frontend directory:
```bash
cd react-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional):
```env
VITE_API_URL=http://localhost:5000
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
react-frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## Components

### Header
- Fixed navigation bar
- Active section highlighting
- Mobile hamburger menu

### Hero
- Animated introduction
- Call-to-action buttons
- Scroll down indicator

### About
- Personal introduction
- Skills showcase
- Profile image

### Education
- Educational background
- Grades and achievements
- Timeline cards

### Experience
- Professional experience
- Internships
- Key responsibilities

### Projects
- Portfolio projects
- Technologies used
- GitHub links

### Contact
- Contact form with validation
- Social media links
- Form submission to backend API

### Footer
- Quick navigation links
- Social media icons
- Copyright information

## API Integration

The contact form sends data to the backend API:

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
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
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #ff6b9d;
  --secondary-color: #c44569;
  --accent-color: #ffa8c5;
  /* ... */
}
```

### Content
Update component files in `src/components/` to modify:
- Personal information
- Skills
- Education details
- Experience
- Projects

### Profile Image
Place your profile image in the `public/` directory and update the path in `About.jsx`:
```jsx
<img src="/profile.jpg" alt="Your Name" />
```

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio!

## Author

**Ashlesha Saxena**
- GitHub: [@SAxenaAshlesha](https://github.com/SAxenaAshlesha)
- LinkedIn: [ashlesha-saxena](https://linkedin.com/in/ashlesha-saxena-a5078a240)
- Email: ashleshasaxena08@gmail.com
