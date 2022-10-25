const myPromise = new Promise((resolve, reject) => {
    const user = { id: 1 };
    

    if (!user) {
        reject("Something went wrong");
    } else {
         setTimeout(() => {
           resolve("Successfully get data");
         }, 1000);
    }
   
});

myPromise
    .then(res => console.log("Found in then:" ,res))
    .catch(err => console.log("Found in catch:", err));
    
    console.log("done");
    