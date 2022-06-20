window.onload=(function()  //executes when the page finishes loading
               {
   var message = "%d seconds before download link appears";
   // seconds before download link becomes visible
   var count = 8;
   var countdown_element = document.getElementById("countdown");
   var download_link = document.getElementById("download_link");
   var dwnn= document.getElementById("dwnn");
   var timer = setInterval(function(){
      // if countdown equals 0, the next condition will evaluate to false and the else-construct will be executed
      if (count) {
          // display text
          countdown_element.innerHTML = "<h2>Please wait for <span style='color: red;'>%d seconds.</span><h2>".replace("%d", count);
          // decrease counter
          count--;
      } else {
          // stop timer
          clearInterval(timer);
          // hide countdown
          countdown_element.style.display = "none";
          // show download link
          download_link.style.display = "";
        // show download link
          dwnn.style.display="";
      }
   }, 1000);
})();
function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}
function hideURLParams() {
	//Parameters to hide (ie ?success=value, ?error=value, etc)
	var hide = ['link'];
	for(var h in hide) {
		if(getURLParameter(h)) {
			history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname);
		}
	}
}

//Run onload, you can do this yourself if you want to do it a different way
window.onload = hideURLParams;
