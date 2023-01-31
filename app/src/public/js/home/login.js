"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector('button');

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value
    };
    // API가 없는 상태
    fetch("/login", {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    });
}
