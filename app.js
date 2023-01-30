const express = require('express');
const app = express();
const port = 5000;

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use('/', home); // use는 미들웨어를 등록해주는 메서드.

app.listen(port, function () {
    console.log(`
    ############################################
        Server listening on port : ${port}
        http://localhost:${port}
    ############################################
    `);
});