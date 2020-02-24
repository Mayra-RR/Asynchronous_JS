function fakeAjax(url, cb) {
    const fakeResponses = {
        file1: "The first text",
        file2: "The second text",
        file3: "The third text",
    }

    let randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

    console.log(`Requesting: ${url}`);

    setTimeout(() => cb(fakeResponses[url]), randomDelay);
}

function output(text) {
    console.log(text);
}

function getFile(file) {
    return new Promise((resolve, reject) => {
        fakeAjax(file, resolve);
    });
}

var p1 = getFile("file1");
var p2 = getFile("file2");
var p3 = getFile("file3");

p1
.then(output)
.then(function () { 
    return p2;
})
.then(output)
.then(function () { 
    return p3;
})
.then(output)
.then(function () {
    output("Complete!");
});