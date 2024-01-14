const { log } = require("console");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const fs = require('fs');
const login = {
    "username": "",
    "password": ""
};
const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout
});
readline.question("inserire username: ", username => {
    readline.question("inserire password: ", password => {
        login.password = password;
    login.username = username;
        console.log(login);
        readline.close();

        const json = JSON.parse(fs.readFileSync("conf.json"));
const token = json.token;
        fetch("https://ws.progettimolinari.it/credential/login", {
      headers: {
        "content-type": "application/json",
        key: token
      },
      method: "Post",
      body: JSON.stringify(login)
        })
        .then((element) => element.json())
      .then((element) => {
        console.log("risposta login: ", element);
      })
      .catch((error) => console.error(error))
    });
});
