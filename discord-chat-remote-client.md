<div>
   <h2 id="username"></h2>
   <input id="content" type="text" placeholder="message"></textarea>

   <button id="send" onclick="send()">Send</button>
</div>

<style>
#content {
   width: 350px;
   font-size: 10pt;
}
</style>

<script>
var username = 'John Bread';
var userid = Math.floor((Math.random() * 1000000) + 1);
document.getElementById('username').innerHTML = username;

function send() {
   var hookurl = "https://discordapp.com/api/webhooks/257734345287139328/nVUTTeJA9lBGd_-RPJUDIzM3Cr3bA_L6dCnuHPiJsAUdaSlqC1th1gLdyAg-0XcZRV5w" + "/slack";

   var msgJson = {
      "username": "John Bread",
      "icon_url": "http://alanhardaker.co.za/wp-content/uploads/2014/08/Testimonial-Male-Icon.png",
      "text": document.getElementById('content').value
   };
   post(hookurl, msgJson);
   document.getElementById("content").value = "";
}

function post(url, jsonmsg) {
   xhr = new XMLHttpRequest();
   xhr.open("POST", url, true);
   xhr.setRequestHeader("Content-type", "application/json");
   var data = JSON.stringify(jsonmsg);
   console.log("jsonmsg = ", jsonmsg);
   console.log("data = " + data);
   xhr.send(data);
   xhr.onreadystatechange = function() {
      if (this.status != 200) {
         alert(this.responseText);
      }
   };
}

document.getElementById("content")
   .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
         document.getElementById("send").click();
      }
   });
</script>