const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gamesRouter = require('./games');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dbUri = 'mongodb+srv://gangmin8379:dovmf3203@dlit.o2idzyn.mongodb.net/?retryWrites=true&w=majority&appName=dlit'; // 올바른 연결 문자열로 업데이트하세요.

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/games', gamesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});