
var showUserProfile = function(emailVal){
   bigHTMLStr =''
   bigHTMLStr += '<div class="row">'
   bigHTMLStr +=   '<h3 class="bg-danger">User Profile</h3>'
   bigHTMLStr +=   '<div class="col-sm-offset-3 col-sm-6">'
   bigHTMLStr +=     '<div class="thumbnail">'
   bigHTMLStr +=       '<img src="https://flathash.com/' + emailVal + '" alt="...">'
   bigHTMLStr +=       '<div class="caption">'
   bigHTMLStr +=         '<h3>' + emailVal + '</h3>'
   bigHTMLStr +=       '</div>'
   bigHTMLStr +=    ' </div>'
   bigHTMLStr +=   '</div>'
   bigHTMLStr += '</div>'
   document.querySelector('#app-container').innerHTML = bigHTMLStr
}
