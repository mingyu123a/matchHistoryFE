const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/login', (req, res) => {
  res.render('./login/login', { title: 'Login'});
});

// riot.txt 파일 제공
app.get('/riot.txt', (req, res) => {
  const filePath = path.join(__dirname, 'riot.txt');
  res.sendFile('../riot.txt');
});