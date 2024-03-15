//Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();


( (name) => {
    //unnamed  or simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("raju")

//chai("raju")