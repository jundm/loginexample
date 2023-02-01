"use strict";

class UserStorage {
    // #은 데이터 은닉화
    static #users = {
        id: ["jun", "jun1", "jun2"],
        password: ["1234", "1234", "1234"],
        name: ["준", "준", "준"]
    };

    // 데이터는 메서드로써 통신 시켜야함
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo){

    }
}

module.exports = UserStorage;