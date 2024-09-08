const express = require('express');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

app.get('/riot-api-key', (req, res) => {
  const riotApiKey = process.env.RIOT_API_KEY;
  
  console.log('Riot API Key:', riotApiKey); // API 키 확인을 위한 로그

  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Riot API Key Example</title>
      </head>
      <body>
        <h1>Riot API Key</h1>
        <p>Your Riot API key is: <span id="api-key"></span></p>
        <script>
          // 서버에서 가져온 API 키를 클라이언트에 주입
          const riotApiKey = "${riotApiKey}";
          document.getElementById('api-key').innerText = riotApiKey;
        </script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
