# Discord Remote Client
<div class="chat-frame emphasize">
   <h2 id="username">Choose a name: <input id=user type=text placeholder="Username" onfocusout="setUser()"></h2>
   <textarea id="content" type="text" placeholder="Message"></textarea>

   <br>
   <button id="send" onclick="send()">Send</button>
</div>

<style>
#content {
   width: 350px;
   height: 100px;
   box-sizing: border-box;
   font-size: 10pt;
   resize: none;
}

input,
textarea {
   font-family: monospace;
}

div.chat-frame {
   display: inline-block;
   padding: 5px;
   margin: 7px;
   background-color: #999;
   border: #666;
   border-width: thin;
   border-radius: 3px;
   color: #f9f9f9;
}

div[class*="embossed"] {
   text-shadow: 0 1px 1px rgba(255, 255, 255, 0.9);
}

.embossed {
   border: 1px solid rgba(0, 0, 0, 0.05);
   box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.9);
}

.emphasize {
   box-shadow: 0 0 5px 2px rgba(0, 0, 0, .35)
}
</style>

<script>
var username = 'John Bread';
setUser = function() {

   if (document.getElementById('user').value.length == 0) {
      var username = 'John Bread';
   } else {
      username = user.value;
   };

   document.getElementById('username').innerHTML = username;

}

function send() {

   if (document.getElementById('content').value.length == 0) {
      return;
   };

   var hookurl = "https://discordapp.com/api/webhooks/257734345287139328/nVUTTeJA9lBGd_-RPJUDIzM3Cr3bA_L6dCnuHPiJsAUdaSlqC1th1gLdyAg-0XcZRV5w" + "/slack";

   var msgJson = {
      "username": username,
      "icon_url": "http://alanhardaker.co.za/wp-content/uploads/2014/08/Testimonial-Male-Icon.png",
      "text": document.getElementById('content').value
   };
   post(hookurl, msgJson);
   document.getElementById("content").value = "";
};

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

// document.getElementById("content")
//    .addEventListener("keyup", function(event) {
//       event.preventDefault();
//       if (event.keyCode == 13) {
//          document.getElementById("send").click();
//       }
//    });

$("#content").keydown(function(e) {
   if (e.keyCode == 13) {
      if (e.shiftKey) {
         // alert("Enter was pressed")
         send();
      } else {
         $(this).val($(this).val() + "\n");
      };
      return false;
   };
});
</script>