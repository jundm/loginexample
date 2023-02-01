"use strict";

const fs = require("fs").promises;

class UserStorage {
    // #은 최상단으로 올리는 컨벤션
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    // #은 데이터 은닉화
    // #users = {};

    // 데이터는 메서드로써 통신 시켜야함
    // static getUsers(...fields) {
    //     // const users = this.#users;
    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if (users.hasOwnProperty(field)) {
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});
    //     return newUsers;
    // }

    static getUserInfo(id) {
        // const users = this.#users;
        return fs
            .readFile("./src/databases/users.json")
            .then(data => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }


    static save(userInfo) {

    }
}

module.exports = UserStorage;