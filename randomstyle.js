var p = document.getElementById("content"),
    splits = p.innerHTML.split(" "),
    i,
    newText; 

p.innerHTML = " ";

for (i = 0; i < splits.length; i += 1) {
    newText = document.createElement("span");
    newText.innerText = splits[i];
    p.appendChild(newText);
}

var spans = document.querySelectorAll('span'),
    rand =  spans[Math.floor(Math.random() * spans.length)];

for (i = 0; i < spans.length; i += 1) {
    rand.classList.add("different-style");
}