const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "LearnSpace API is running successfully!"
    });
});

// GET API endpoint
app.get("/api/courses", (req, res) => {
    res.status(200).json({
        success: true,
        courses: [
            {
                id: 1,
                title: "HTML & CSS",
                lessons: 12
            },
            {
                id: 2,
                title: "JavaScript",
                lessons: 18
            },
            {
                id: 3,
                title: "Node.js",
                lessons: 15
            }
        ]
    });
});

// POST API endpoint
app.post("/api/courses", (req, res) => {
    const { title, lessons } = req.body;

    // Validate title
    if (!title || typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Course title is required and must be a valid text."
        });
    }

    // Validate lessons
    if (
        lessons === undefined ||
        typeof lessons !== "number" ||
        lessons <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Lessons must be a number greater than 0."
        });
    }

    // Create new course
    const newCourse = {
        id: Date.now(),
        title: title.trim(),
        lessons: lessons
    };

    // Successful response
    res.status(201).json({
        success: true,
        message: "Course created successfully!",
        course: newCourse
    });
});

   // Start server
app.listen(PORT, () => {
    console.log(`LearnSpace API is running on http://localhost:${PORT}`);
});