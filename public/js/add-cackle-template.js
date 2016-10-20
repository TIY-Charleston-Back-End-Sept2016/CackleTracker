var showAddCacklePage = function(){
   var fields = [
      {attr: 'cackler', labelName:"Cackler"},
      {attr: 'cause' , labelName: "Cause of Cackle"},
      {attr: 'rating', labelName: "Cackle Rating"},
      {attr: 'time', labelName: "Time of Cackle"}
   ]

   var bigHTMLStr = ''
   bigHTMLStr += '<div class="row">'
   bigHTMLStr +=    '<form class="col-sm-offset-3 col-sm-6" id="new-cackle-form">'
   bigHTMLStr +=     '<h2 class="bg-success">Add a New Cackle!</h2>'

   forEach(fields, function(field){
      console.log(field)
      bigHTMLStr +=     ' <div class="form-group">'
      bigHTMLStr +=       ' <label for="'+field.column+'">'+field.labelName+'</label>'
      bigHTMLStr +=        '<input type="text" class="form-control" name="'+field.attr+'">'
      bigHTMLStr +=      '</div>'
   })

   bigHTMLStr +=      '<button type="submit" class="btn btn-success">Submit Cackle</button>'
   bigHTMLStr +=    '</form>'
   bigHTMLStr += '</div>'
   console.log(bigHTMLStr)
   document.querySelector('#app-container').innerHTML = bigHTMLStr
   // document.querySelector('#new-cackle-form').addEventListener('submit', postCackleToDb )
}
