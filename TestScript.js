document.body.onload = addElement;

var nodeText = "This is the new text element.";
console.log("nodeText = " + nodeText);


function addElement () { 
  var para = document.createElement("p");
  var node = document.createTextNode(nodeText);
  para.appendChild(node);

  var element = document.getElementById("div1");
  element.appendChild(para);
}