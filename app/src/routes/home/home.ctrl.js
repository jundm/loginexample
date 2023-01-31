"use strict";

const users = {
    id: ["jun", "jun1", "jun2"],
    password: ["1234", "1234", "1234"]
};

const output = {
    root: (req, res) => {
        res.render("home");
    },
    login: (req, res) => {
        res.render("home/login");
    }
};

const process = {
    login: (req, res) => {
        const id = req.body.id, password = req.body.password;
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        });
    }
};

module.exports = {
    output,
    process
};