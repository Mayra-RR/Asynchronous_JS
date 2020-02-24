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

["file1", "file2", "file3"]
.map(getFile)
.reduce(function combine(chain, pr){
    return chain.then(function(){
        return pr;
    }).then(output);
}, Promise.resolve())
.then(function () {
    output("Complete!")
});