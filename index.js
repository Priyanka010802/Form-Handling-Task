const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// body parser (built-in)
app.use(express.urlencoded({ extended: true }));

// static public folder
app.use(express.static("public"));

// GET - Show Form
app.get('/', (req, res) => {
    res.render('form');
});

// POST - Receive Form Data
app.post('/saveform', (req, res) => {
    const formData = req.body;
    res.render('result', { data: formData });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
