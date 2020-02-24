var request = new XMLHttpRequest();
request.open('GET', '/', /* async = */ false);
request.send();
console.log(request.responseText.substring(0, 150));
console.log('...');

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }

  function getPosts() {
    return new Promise(function(resolve, reject) { //always listening & waitng for response to be ready
    var req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

        req.onload = function() {
          if (req.status == 200) {
            resolve(JSON.parse(req.response));
          }
          else {
            reject();
          }
        };

        req.send();
    })
}

getPosts().then(r =>{
    console.log(r);
  }).catch(() => {
    console.log('Algo salió mal');
  });


fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });