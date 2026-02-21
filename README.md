# DreamPixels
# 🌟 DreamPixels

DreamPixels is a Full-Stack MERN AI Text-to-Image Generator that converts text prompts into AI-generated images with authentication and a credit-based system.

---

## 📌 Overview

DreamPixels allows users to:

- 🔐 Register & Login securely
- 🤖 Generate AI images using text prompts
- 💳 Use a credit-based image generation system
- 🖼️ View and manage generated images
- 🔒 Access protected routes using JWT authentication

This project demonstrates full-stack development using the MERN stack with proper API structure and authentication flow.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router
- Tailwind CSS / Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer / Cloudinary (for image handling)

---

## 📁 Project Structure

```
DreamPixels/
│
├── client/                 # React frontend
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── assets/
│
├── server/                 # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/AadilTamboli01/DreamPixels.git
cd DreamPixels
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file inside the **server** folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
AI_API_KEY=your_ai_api_key
```

---

### 4️⃣ Run the Application

#### Start Backend

```bash
npm start
```

#### Start Frontend

```bash
npm run dev
```

App will run on:

Frontend → http://localhost:5173  
Backend → http://localhost:5000  

---

# 🔐 Authentication Flow

1. User registers
2. JWT token generated on login
3. Token sent in request headers
4. Middleware verifies token before allowing access

Protected routes require:

```
token: your_jwt_token
```

---

# 📡 API Documentation

Base URL:

```
http://localhost:5000/api
```

---

## 🔑 Auth Routes

### 🔹 Register User

**POST** `/api/auth/register`

Request Body:

```json
{
  "name": "Aadil",
  "email": "aadil@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "success": true,
  "token": "jwt_token_here"
}
```

---

### 🔹 Login User

**POST** `/api/auth/login`

Request Body:

```json
{
  "email": "aadil@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "success": true,
  "token": "jwt_token_here"
}
```

---

## 🎨 Image Routes

### 🔹 Generate AI Image

**POST** `/api/generate`

Headers:

```
token: your_jwt_token
```

Request Body:

```json
{
  "prompt": "A futuristic cyberpunk city"
}
```

Response:

```json
{
  "success": true,
  "imageUrl": "generated_image_url",
  "remainingCredits": 9
}
```

---

### 🔹 Get All Images

**GET** `/api/images`

Headers:

```
token: your_jwt_token
```

Response:

```json
{
  "success": true,
  "images": [
    {
      "_id": "image_id",
      "prompt": "AI prompt text",
      "imageUrl": "image_url",
      "createdAt": "date"
    }
  ]
}
```

---

### 🔹 Delete Image

**DELETE** `/api/images/:id`

Headers:

```
token: your_jwt_token
```

Response:

```json
{
  "success": true,
  "message": "Image deleted successfully"
}
```

---

# 💳 Credit System

- Each AI image generation consumes 1 credit
- Credits stored in user schema
- Image generation blocked if credits = 0
- Remaining credits returned in response

---

# 🚀 Future Improvements

- Add payment integration for buying credits
- Add image download feature
- Add dashboard analytics
- Add rate limiting & security improvements
- Deploy using Docker

---

# 👨‍💻 Author

**Aadil Tamboli**  
MERN Stack Developer  
GitHub: https://github.com/AadilTamboli01

---

⭐ If you like this project, consider giving it a star!
