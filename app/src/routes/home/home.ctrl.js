"use strict";

const User = require("../../models/User");

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
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output,
    process
};