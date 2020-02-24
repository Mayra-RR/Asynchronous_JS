var responses = {};

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

function getFile(fileName) {
    fakeAjax(fileName, function (text) {
        handleResponses(file.text);
    });
}

function handleResponses(fileName, content) {
    if (!(fileName in responses))
        responses[fileName] = content;

    var fileNames = ["file1", "file2", "file3"];

    for (let i = 0; i < fileNames.length; i++) {
        if (fileNames[i] in responses) {
            if (typeof responses[fileNames[i]] == "string") {
                output(responses[fileNames[i]]);
                responses[fileNames[i]] = false;
            }
        }
        else {
            return;
        }
    }
    output("Complete!");
}

getFile("file1");
getFile("file2");
getFile("file3");

 trackCheckout(purchaseInfo, function finsih() {
     if (!hasBeenCalled) {
         hasBeenCalled = true;
         chargeCreditCard(purchaseInfo);
         showThankyouPage();
     }
 });