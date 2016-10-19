
//
// var cackleObj = {
//    cackler: 'Kaity',
//    cause: 'something',
//    id: 2,
//    rating: 5,
//    time: "today"
// }


var routerController = function(){
   var currentHash = window.location.hash.slice(1)

   if(currentHash.length === 0) { return showHomePage() }

   switch(currentHash){
      case "auth":
         showAuthPage()
         break;
      default:
         document.querySelector('#app-container').innerHTML = "<h1 class='bg-warning'>PAGE NOT FOUND</h1>";
   }

}

var authenticateUser = function(evt){
   evt.preventDefault()
   console.log("email", evt.target.email.value)
   console.log("passord", evt.target.password.value)
   var dataForServer = {
      email: evt.target.email.value,
      password: evt.target.password.value
   }

   console.log('to server:', JSON.stringify(dataForServer))
   var configObj = {
      url: '/login',
      data: JSON.stringify(dataForServer),
      headers: {
         "Content-Type": "application/json"
      },
      dataType: 'json'
   }

   $.post( configObj ).then(function(godKnowsWhat){
         console.log(godKnowsWhat)
   })

}

window.addEventListener('hashchange', routerController)
routerController()
