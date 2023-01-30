const express = require('express');
const app = express();
const port = 5000;


app.get("/",(req,res)=>{
    res.send(`
    <!doctype html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        여기는 루트 입니다.
    </body>
    </html>
    `)
})

app.get('/login',(req,res)=>{
    res.send(`
    <!doctype html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
      <input type="text" placeholder="아이디"><br>
      <input type="text" placeholder="비밀번호"><br>
      <button>로그인</button>
    </body>
    </html>
    `)
})


app.listen(port, function () {
    console.log(`
    ############################################
        Server listening on port : ${port}
        http://localhost:${port}
    ############################################
    `);
});