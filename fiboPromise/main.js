function fiboPromise(n) {
    return new Promise((resolve, reject) => {
      if (n === 2) {
        resolve([1, 1]);
      } else {
        setImmediate(() => {
          fiboPromise(n - 1)
            .then((F) => {
              const len = F.length;
              F.push(F[len - 1] + F[len - 2]);
              resolve(F);
            })
            .catch(reject);
        });
      }
    });
  }

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
    });

    readline.question("inserire numero di iterazioni: ", n => {
      fiboPromise(n)
    .then((F) => {
      console.log(F.join('-'));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
      readline.close();
  });
  
  
  

    
      
      