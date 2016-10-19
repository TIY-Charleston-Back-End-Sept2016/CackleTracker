
var showAuthPage = function(){
   var bigHTMLStr = ''
   bigHTMLStr += '<div class="row">'
   bigHTMLStr +=    '<form class="col-sm-offset-3 col-sm-6" id="auth-form">'
   bigHTMLStr +=    '<h2 class="text-primary">Login or Sign Up!</h2>'

   bigHTMLStr +=     ' <div class="form-group">'
   bigHTMLStr +=       ' <label for="email">Email address</label>'
   bigHTMLStr +=        '<input type="email" class="form-control" id="email" placeholder="Email">'
   bigHTMLStr +=      '</div>'
   bigHTMLStr +=      '<div class="form-group">'
   bigHTMLStr +=        '<label for="pw">Password</label>'
   bigHTMLStr +=        '<input type="password" class="form-control" id="password" placeholder="Password">'
   bigHTMLStr +=      '</div>'
   bigHTMLStr +=      '<button type="submit" class="btn btn-default">Submit</button>'
   bigHTMLStr +=    '</form>'
   bigHTMLStr += '</div>'

   document.querySelector('#app-container').innerHTML = bigHTMLStr
   document.querySelector('#auth-form').addEventListener('submit', authenticateUser )
}
