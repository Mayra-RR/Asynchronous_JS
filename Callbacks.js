setTimeout( function() {
    console.log("callback");
}, 1000);


setTimeout( function() {
    console.log("one");
    setTimeout( function() {
        console.log("two");
        setTimeout( function() {
            console.log("three");
        }, 1000);        
    }, 1000);    
}, 1000);

function one (cb) {
    console.log("one");
    setTimeout(cb, 1000);
}


function two (cb) {
    console.log("two");
    setTimeout(cb, 1000);
}

function three (cb) {
    console.log("three");
    setTimeout(cb, 1000);
}

one(function () {
    two(three);
});
