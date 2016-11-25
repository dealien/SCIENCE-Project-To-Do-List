document.body.onload = addElement;
document.body.onload = testjQuery;
document.body.onload = linkNames;

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
  } else {
    console.log("jQuery is loaded");
  }
}

function linkNames() {
  $('span').replaceWith(function() {
    var username = $.trim($(this).text());
    return '<a href="https://socialclub.rockstargames.com/member/' + username + '" target="_blank">' + username + '</a>';
  });
}