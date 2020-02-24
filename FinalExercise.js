var request = new XMLHttpRequest();
request.open("GET", "/", /* async = */ false);
request.send();
console.log(request.responseText.substring(0, 150));
console.log("...");

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
  return new Promise(function(resolve, reject) {
    //always listening & waitng for response to be ready
    var req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/posts");

    req.onload = function() {
      if (req.status == 200) {
        console.log(req.response);
        resolve(JSON.parse(req.response));
      } else {
        reject();
      }
    };
    req.send();
  });
}
//  getPosts().then(r => {
//     let first = r;
// for (let i=0; i < first.length; i++){
//       console.log("Post: ", [i]);
//     console.log("Title: ", first[i].title);
//     console.log("Body: ", first[i].body);
//     }
//   })
//   .catch(() => {
//     console.log("Algo salió mal");
//   });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    for (let i = 0; i < myJson.length; i++) {
      console.log("Post: ", [i]);
      console.log("Title: ", myJson[i].title);
      console.log("Body: ", myJson[i].body);
    }
  });
// console.log(myJson);
// }

//Ticket
function addElement(addPost) {
  var addPost = document.getElementById("add").value;
  var getData = async () => {
    var response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    var data = await response.json();
    return data;
  };
  getData(addPost);
}

function showElement(addPost) {
  var Post = document.getElementsByTagName("ul");
  var idli = document.createElement("li");
  Post.appendChild(idli);
  idli.appendChild(addPost);
}
