const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;


// Mock character data
const starWarsCharacters = [
    { name: 'Luke Skywalker', height: 172, mass: 77 },
    { name: 'Darth Vader', height: 202, mass: 136 },
    { name: 'Leia Organa', height: 150, mass: 49 },
    { name: 'Han Solo', height: 180, mass: 80 },
    { name: 'Obi-Wan Kenobi', height: 182, mass: 77 },
    { name: 'Yoda', height: 66, mass: 17 },
    { name: 'R2-D2', height: 96, mass: 32 },
    { name: 'C-3PO', height: 167, mass: 75 },
    { name: 'Chewbacca', height: 228, mass: 112 },
    { name: 'Anakin Skywalker', height: 188, mass: 84 },
    // Add more Star Wars characters here
];

const lotrCharacters = [
    { name: 'Frodo Baggins', height: 105, mass: 33 },
    { name: 'Gandalf', height: 183, mass: 75 },
    { name: 'Aragorn', height: 195, mass: 81 },
    { name: 'Legolas', height: 178, mass: 70 },
    { name: 'Gimli', height: 138, mass: 85 },
    { name: 'Samwise Gamgee', height: 103, mass: 41 },
    { name: 'Gollum', height: 133, mass: 9 },
    { name: 'Boromir', height: 185, mass: 88 },
    { name: 'Faramir', height: 186, mass: 76 },
    { name: 'Galadriel', height: 198, mass: 58 },
    // Add more LOTR characters
];

app.use(bodyParser.json());

// Use cors middleware to enable CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Express App');
  });

// API routes for blue and red characters
app.get('/api/starwars', (req, res) => {
  res.json(starWarsCharacters);
});

app.get('/api/lotr', (req, res) => {
  res.json(lotrCharacters);
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

