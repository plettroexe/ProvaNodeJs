const fibo = (n, n1 = 1, n2 = 0) => {
    if (n > 0) {
        setImmediate(fibo, n - 1, n2, n1 + n2)
        console.log(n1 + n2);
    }
}

const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout
});

readline.question("inserire numero di iterazioni: ", n => {
    fibo(n);
    readline.close();
});