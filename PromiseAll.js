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

Promise.all([
    p1,
    p2,
    p3
])
.catch((error) => console.log("Nel pastel"))
.then((results) => {
    output(results[0]);
    output(results[1]);
    output(results[2]);
})
