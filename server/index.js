import express from 'express';
import cors from 'cors';
import pool from './index';
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('server has started on port 5000');
});

// ROUTES

// POST a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// GET todos

// PUT a todo

// DELETE a todo
