// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs)
let headers1 = document.getElementsByTagName("h1");
console.log(headers1)
let headers3 = document.getElementsByTagName("h3");
console.log(headers3)

paragraphs[0].innerText = "TEXT CHANGE"
paragraphs[1].innerText = "TEXT CHANGE 2"

headers1[0].innerText = "NEW HEADER 1"
headers1[1].innerText = "NEW HEADER 1"

headers3[0].innerText = "NEW HEADER 3"

