const express = require('express');
const app = express();
const port = 5000;

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home")
});

app.get('/login', (req, res) => {
    res.render("home/login")
});


app.listen(port, function () {
    console.log(`
    ############################################
        Server listening on port : ${port}
        http://localhost:${port}
    ############################################
    `);
});