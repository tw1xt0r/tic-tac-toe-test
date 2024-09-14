const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/move', (req, res) => {
    const { board } = req.body;
  
    const emptyCells = board
      .map((cell, index) => (cell === '' ? index : null))
      .filter(index => index !== null);
  
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      board[emptyCells[randomIndex]] = 'O';
    }
  
    res.json({ board });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });