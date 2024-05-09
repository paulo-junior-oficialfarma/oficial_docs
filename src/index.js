const express = require('express');
const app = express();
const cors = require('cors');
const users = [
    { email: 'test@example.com', password: 'password123' }
];

app.use(express.json()); // This middleware parses JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * POST /login
 * @response 200 - OK
 * @response 401 - Bad Request
 */
app.post("/login", (req, res) => {
    const { email, password } = req.body; // Correctly extracting email and password from the request body
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username/password supplied' });
    }
});

/**
 * POST /users/create
 * @response 201 - Created
 * @response 400 - Bad Request
 */
app.post("/users/create", (req, res) => {
    const userData = req.body.user;
    const addressData = req.body.address;
    const socialMediaData = req.body.social_media;
    const paymentData = req.body.payment_data;

    // Example: Validate and process the data
    // This is a placeholder for your actual logic to create a user
    // You might want to validate the data, save it to a database, etc.

    // For demonstration, we'll just respond with a success message
    res.status(201).json({ message: 'User created successfully' });
});

app.listen(4000, () => {
    console.log("listening on port 4000");
});
