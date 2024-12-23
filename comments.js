// Create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Create a route to handle incoming POST requests
app.post('/comments', (req, res) => {
  console.log('Incoming POST request');
  res.send('Thank you for your comment!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});git add comments.js
