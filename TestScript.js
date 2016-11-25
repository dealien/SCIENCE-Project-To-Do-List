document.body.onload = addElement;

var nodeText = "This is the new text element.";
console.log("nodeText = " + nodeText);

function addElement() {
  console.log("Running function addElement()");
  var para = document.createElement("p");
  var node = document.createTextNode(nodeText);
  para.appendChild(node);

  var element = document.getElementById("div1");
  element.appendChild(para);
}

function testjQuery() {
  if (!window.jQuery) {
    console.log("jQuery is not loaded");
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "path/to/jQuery";
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  } else {
    console.log("jQuery is loaded");