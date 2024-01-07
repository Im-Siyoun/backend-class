const express = require('express');

const app = express();

app.post('/', (req, res) => {
  res.send('POST 요청을 받았습니다.');
});
app.get('/', (req, res) => {
  res.send('GET 요청을 받았습니다.');
});
app.patch('/', (req, res) => {
  res.send('PATCH 요청을 받았습니다.');
});
app.delete('/', (req, res) => {
  res.send('DELETE 요청을 받았습니다.');
});

app.listen(3000, () => {
  console.log('서버가 실행되었습니다.');
});