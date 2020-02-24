function trackCheckout(info){
    return new Promise (function (resolve, reject) {
        // attempt to track the checkout

        // if successful, call resolve()
        // otherwise, call reject(error)
    });
}

function getData(d) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve(d), 1000);
    })
}

var x;
getData(10)
.then((num1) => {
    x = 1 + num1;
    return getData(30);
})
.then((num2) => {
    var y = 1 + num2;
    return getData("Meaning of life: " + (x +y));
})
.then((answer) => console.log(answer));