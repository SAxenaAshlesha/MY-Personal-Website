# Portfolio Backend API

Node.js + Express backend API for the portfolio website with MongoDB database.

## Features

- 🔒 Secure REST API with Helmet.js
- 📝 MongoDB database for contact form submissions
- ✅ Input validation with express-validator
- 🌐 CORS enabled
- 📊 RESTful endpoints with pagination
- 🔍 Query filtering by status
- 📈 Health check endpoint

## Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **express-validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## Prerequisites

- Node.js v16+
- MongoDB v5+ (local or Atlas)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```

**Response:**
```json
{
  "status": "success",
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Submit Contact Form
```
POST /api/contact
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Hello, I would like to connect..."
}
```

**Validation Rules:**
- `name`: 2-100 characters, required
- `email`: Valid email format, required
- `subject`: 3-200 characters, required
- `message`: 10-1000 characters, required

**Success Response (201):**
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

**Error Response (400):**
```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "msg": "Email is required",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Get All Contact Messages
```
GET /api/contact?status=new&limit=50&page=1
```

**Query Parameters:**
- `status` (optional): Filter by status (new, read, replied, archived)
- `limit` (optional): Number of results per page (default: 50)
- `page` (optional): Page number (default: 1)

**Response:**
```json
{
  "status": "success",
  "data": {
    "contacts": [...],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 50,
      "pages": 2
    }
  }
}
```

### Get Single Contact Message
```
GET /api/contact/:id
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "Hello...",
    "status": "new",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Update Contact Status
```
PATCH /api/contact/:id
Content-Type: application/json
```

**Request Body:**
```json
{
  "status": "read"
}
```

**Valid Status Values:**
- `new` - Unread message
- `read` - Message has been read
- `replied` - Response sent
- `archived` - Archived message

**Response:**
```json
{
  "status": "success",
  "message": "Contact status updated successfully",
  "data": {...}
}
```

### Delete Contact Message
```
DELETE /api/contact/:id
```

**Response:**
```json
{
  "status": "success",
  "message": "Contact message deleted successfully"
}
```

## Database Schema

### Contact Model

```javascript
{
  name: String (required, 2-100 chars),
  email: String (required, valid email),
  subject: String (required, 3-200 chars),
  message: String (required, 10-1000 chars),
  status: String (enum: new, read, replied, archived),
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `email` + `createdAt` (descending)
- `status`

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/portfolio |
| `CLIENT_URL` | Frontend URL for CORS | http://localhost:3000 |

## Error Handling

The API uses consistent error responses:

```json
{
  "status": "error",
  "message": "Error description"
}
```

**HTTP Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Internal Server Error

## Security Features

- **Helmet.js**: Sets security headers
- **CORS**: Configured for specific origin
- **Input Validation**: All inputs are validated and sanitized
- **Rate Limiting**: Can be added with express-rate-limit
- **MongoDB Injection Protection**: Mongoose handles this

## Testing

### Manual Testing with cURL

**Submit Contact Form:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message for the contact form."
  }'
```

**Get All Contacts:**
```bash
curl http://localhost:5000/api/contact
```

**Get Single Contact:**
```bash
curl http://localhost:5000/api/contact/CONTACT_ID
```

**Update Status:**
```bash
curl -X PATCH http://localhost:5000/api/contact/CONTACT_ID \
  -H "Content-Type: application/json" \
  -d '{"status": "read"}'
```

**Delete Contact:**
```bash
curl -X DELETE http://localhost:5000/api/contact/CONTACT_ID
```

### View Data in MongoDB

```bash
# Connect to MongoDB
mongosh

# Switch to portfolio database
use portfolio

# View all contacts
db.contacts.find().pretty()

# Count contacts
db.contacts.countDocuments()

# Find by status
db.contacts.find({ status: "new" }).pretty()

# Delete all contacts (be careful!)
db.contacts.deleteMany({})
```

## Deployment

### Heroku

1. Create Heroku app:
```bash
heroku create your-portfolio-api
```

2. Set environment variables:
```bash
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
heroku config:set CLIENT_URL=your_frontend_url
heroku config:set NODE_ENV=production
```

3. Deploy:
```bash
git push heroku main
```

### Render

1. Create new Web Service
2. Connect GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables

### Railway

1. Create new project
2. Connect GitHub repository
3. Add environment variables
4. Deploy automatically

## MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for all)
5. Get connection string
6. Update `MONGODB_URI` in `.env`

## Monitoring

### Check Server Status
```bash
curl http://localhost:5000/api/health
```

### View Logs
```bash
# Development
npm run dev

# Production (with PM2)
pm2 logs
```

## Future Enhancements

- [ ] Add authentication for admin endpoints
- [ ] Implement rate limiting
- [ ] Add email notifications for new submissions
- [ ] Add file upload for attachments
- [ ] Implement admin dashboard API
- [ ] Add analytics endpoints
- [ ] Implement caching with Redis
- [ ] Add API documentation with Swagger

## Troubleshooting

### MongoDB Connection Issues

**Error:** `MongooseServerSelectionError`
- Check if MongoDB is running
- Verify connection string in `.env`
- Check network connectivity
- For Atlas: Verify IP whitelist

### Port Already in Use

**Error:** `EADDRINUSE`
```bash
# Find process using port 5000
npx kill-port 5000
```

### CORS Errors

- Verify `CLIENT_URL` in `.env` matches frontend URL
- Check CORS configuration in `server.js`

## License

MIT

## Author

**Ashlesha Saxena**
- Email: ashleshasaxena08@gmail.com
- GitHub: [@SAxenaAshlesha](https://github.com/SAxenaAshlesha)
