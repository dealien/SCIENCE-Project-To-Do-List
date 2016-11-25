document.body.onload = addElement;

var nodeText = "This is the new text element.";


function addElement () { 
  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);

  var element = document.getElementById("div1");
  element.appendChild(para);
}