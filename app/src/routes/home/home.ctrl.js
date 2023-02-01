"use strict";

const User = require("../../models/User");

const output = {
    root: (req, res) => {
        res.render("home");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register:(req,res)=>{
      console.log('레지스터')
    }
};

module.exports = {
    output,
    process
};