# 🚀 LearnSpace Backend API

This is my second project as a Full Stack Developer intern at DecodeLabs.  
I built a RESTful API for the **LearnSpace** learning platform.

---

## ✨ Features

- 🚀 Express.js backend server
- 📚 GET endpoint for retrieving courses
- ➕ POST endpoint for creating a new course
- 📥 User input handling
- ✅ Basic input validation
- ❌ Error handling for invalid input
- 🔢 Appropriate HTTP status codes
- 🧪 API testing with Postman

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime environment |
| Express.js | Web framework for building the API |
| JavaScript | Server-side programming |
| JSON | Data exchange format |
| Postman | API testing |

---

## 📂 Project Structure

```
decode-labs-project-2/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── screenshots/
    ├── Browser GET.png
    ├── Get Success Postman.png
    ├── POST success.png
    ├── Invalid Title.png
    └── Validation Empty Title.png
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Amnakhan-gif/decode-labs-project-2.git

# Open the project folder
cd decode-labs-project-2

# Install dependencies
npm install

# Start the server
node server.js
```

The server will start at: `http://localhost:3000`

---

## 🔗 API Endpoints

### 🟢 GET — Get All Courses

**Endpoint:** `GET /api/courses`

**Example Response:**
```json
{
  "success": true,
  "courses": [
    { "id": 1, "title": "HTML & CSS", "lessons": 12 },
    { "id": 2, "title": "JavaScript", "lessons": 18 },
    { "id": 3, "title": "Node.js", "lessons": 15 }
  ]
}
```

**Status Code:** `200 OK`

---

### 🟢 POST — Create a New Course

**Endpoint:** `POST /api/courses`

**Request Body:**
```json
{
  "title": "React.js",
  "lessons": 20
}
```

**Successful Response:**
```json
{
  "success": true,
  "message": "Course created successfully!",
  "course": {
    "id": 123456789,
    "title": "React.js",
    "lessons": 20
  }
}
```

**Status Code:** `201 Created`

---

## ✅ Data Validation

### Course Title
- Must be provided
- Must not be empty
- Must be a valid string

### Number of Lessons
- Must be provided
- Must be a number
- Must be greater than 0

---

## ❌ Validation Error Examples

### 1. Empty Course Title

**Request:**
```json
{
  "title": "",
  "lessons": 15
}
```

**Response:**
```json
{
  "success": false,
  "message": "Course title is required and must be a valid text."
}
```

**Status Code:** `400 Bad Request`

---

### 2. Invalid Number of Lessons

**Request:**
```json
{
  "title": "Node.js",
  "lessons": -5
}
```

**Response:**
```json
{
  "success": false,
  "message": "Lessons must be a number greater than 0."
}
```

**Status Code:** `400 Bad Request`

---

### 3. Invalid Data Type for Lessons

**Request:**
```json
{
  "title": "Node.js",
  "lessons": "fifteen"
}
```

**Response:**
```json
{
  "success": false,
  "message": "Lessons must be a number greater than 0."
}
```

**Status Code:** `400 Bad Request`

---

## 🧪 API Testing

The API was tested using Postman and a web browser.

| Test Case | Status |
|-----------|--------|
| GET /api/courses | ✅ 200 OK |
| POST Valid Course | ✅ 201 Created |
| POST Empty Title | ✅ 400 Bad Request |
| POST Invalid Lessons | ✅ 400 Bad Request |
| POST Invalid Data Type | ✅ 400 Bad Request |

---

## 📸 Testing Screenshots

Screenshots are available in the `screenshots/` folder:

| Test Case | Screenshot |
|-----------|------------|
| GET /api/courses (Browser) | `screenshots/Browser GET.png` |
| GET /api/courses (Postman) | `screenshots/Get Success Postman.png` |
| POST Valid Course | `screenshots/POST success.png` |
| POST Invalid Title | `screenshots/Invalid Title.png` |
| POST Empty Title | `screenshots/Validation Empty Title.png` |

---

## 🎯 Project Objectives

- Backend development with Node.js
- REST API implementation
- Server-side logic
- HTTP methods (GET, POST)
- Request and response handling
- JSON data handling
- Basic data validation
- HTTP status codes
- API testing with Postman

---

## 📚 Learning Outcomes

- Node.js fundamentals
- Express.js framework
- RESTful API design
- GET and POST requests
- Request body handling
- Input validation
- Error handling
- HTTP status codes
- Postman API testing
- Git and GitHub workflow

---

## 🚀 Future Improvements

- 🗄️ Database integration
- 🔐 User authentication
- 👤 User management
- 📚 Full CRUD operations
- 🔎 Course search and filtering
- 🛡️ Advanced validation
- 🌐 Deployment to a cloud platform

---

## 👩🏻‍💻 Author

**Amna Khan**  
Full-Stack Developer Intern  
DecodeLabs | Batch 2026

---

## 📄 License

This project was created for educational and internship purposes.
