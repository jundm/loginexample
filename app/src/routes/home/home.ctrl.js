"use strict";

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
        console.log(req.body, 'req');
    }
};

module.exports = {
    output,
    process
};