var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // resolve
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
};

askMom();