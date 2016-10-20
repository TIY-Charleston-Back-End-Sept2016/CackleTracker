
var showCacklesPage = function(cacklesArr){
   var bigHTMLStr = ''
   bigHTMLStr += '<div class="container">'

   bigHTMLStr += '<table class="table">'
   bigHTMLStr +=    '<thead>'
   bigHTMLStr +=       '<tr>'
   bigHTMLStr +=          '<th>Cackler</th>'
   bigHTMLStr +=          '<th>Cackle Cause</th>'
   bigHTMLStr +=          '<th class="text-center">Rating</th>'
   bigHTMLStr +=          '<th>Time</th>'
   bigHTMLStr +=       '</tr>'
   bigHTMLStr +=    '</thead>'
   bigHTMLStr +=    '<tbody>'

   forEach(cacklesArr, function(cackleRecord){
      bigHTMLStr += '<tr>'
      bigHTMLStr +=    '<td>'+cackleRecord.cackler+'</td>'
      bigHTMLStr +=    '<td>'+cackleRecord.cause+'</td>'
      bigHTMLStr +=    '<td class="text-center"><i class="fa fa-star fa-'+cackleRecord.rating+'x text-warning" aria-hidden="true"></i></td>'
      bigHTMLStr +=    '<td>'+cackleRecord.time+'</td>'
      bigHTMLStr += '</tr>'
   })

   bigHTMLStr +=    '</tbody>'



   // bigHTMLStr +=     ' <div class="form-group">'
   // bigHTMLStr +=       ' <label for="email">Email address</label>'
   // bigHTMLStr +=        '<input type="email" class="form-control" id="email" placeholder="Email">'
   // bigHTMLStr +=      '</div>'
   // bigHTMLStr +=      '<div class="form-group">'
   // bigHTMLStr +=        '<label for="pw">Password</label>'
   // bigHTMLStr +=        '<input type="password" class="form-control" id="password" placeholder="Password">'
   // bigHTMLStr +=      '</div>'
   // bigHTMLStr +=      '<button type="submit" class="btn btn-default">Submit</button>'
   // bigHTMLStr +=    '</form>'
   bigHTMLStr +=     '</table>'

   bigHTMLStr += '</div>'

   document.querySelector('#app-container').innerHTML = bigHTMLStr
}
