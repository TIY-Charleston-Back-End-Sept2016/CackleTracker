
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

   var currentHashComponents = currentHash.split('/')
   console.log(currentHashComponents)

   var currentHashPrefix = currentHashComponents[0]
   var currentHashSuffix = currentHashComponents[1]

   switch(currentHashPrefix){
      case "auth":
         showAuthPage()
         break;

      case "user-profile":
         // GET single-event/3  => {id: 3, title: ..., author: ..., }
         showUserProfile(currentHashSuffix);
         break;

      case "cackle-listings":
         // var cacklesDataArray = [
         //    {
         //          cackler: 'Kaity',
         //          cause: 'Zach drinkin again',
         //          id: 1,
         //          rating: 1,
         //          time: "9:30am"
         //    },
         //    {
         //          cackler: 'Kaity',
         //          cause: 'A good pun',
         //          id: 2,
         //          rating: 5 ,
         //          time: " 2:00 pm"
         //    },
         //    {
         //          cackler: 'Kaity',
         //          cause: 'Zachs clever comment about debate',
         //          id: 3,
         //          rating: 4 ,
         //          time: "3:00 pm"
         //    },
         // ]


         $.getJSON("/cackles").then(function(serverRes){
            console.log(serverRes)
            showCacklesPage(serverRes);
         })

         break;

      case "create-cackle":
         showAddCacklePage()
         document.querySelector('#new-cackle-form')
            .addEventListener('submit', function(evt){
               evt.preventDefault()
               var formEl = evt.target

               console.log(formEl.cackler.value)
               console.log(formEl.cause.value)

               var objForDatabase = {
                  cackler: formEl.cackler.value,
                  cause:  formEl.cause.value,
                  rating: formEl.rating.value,
                  time: formEl.time.value
               }

               $.post('/add-cackle', JSON.stringify(objForDatabase)).then(function(serverRes){
                  window.location.hash = "cackle-listings"
               })


            })

         break;

      default:
         document.querySelector('#app-container').innerHTML = "<h1 class='bg-warning'>PAGE NOT FOUND</h1>";
   }

}


var ViewConstructor = function(el, htmlTempFun){
   this.domEl = el,
   this.buildTemplate= htmlTemplate,

   this.eventsList = []

   this.addEvent = function(selector, evtType, fn){
      var domSelector = selector
      var listener = function(){ document.querySelector(domSelector).addEventListener(evtType, fn) }
      this.eventsList.push( listener )
   }

   this.render = function( dataInput ){
      this.domEl.innerHTML = this.buildTemplate( dataInput )
      forEach(this.eventsList, function(evtListenerFun){ evtListenerFun()  })
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

   $.post( '/login', JSON.stringify(dataForServer) ).then(function(godKnowsWhat){
      console.log('Success !!!!')
      window.location.hash = "user-profile/"+dataForServer.email
   })

}


window.addEventListener('hashchange', routerController)
routerController()

var dataRecord = {
      cackler: 'Kaity',
      cause: 'Zachs clever comment about debate',
      rating: 4 ,
      time: "3:00 pm"
}


$.getJSON("https://quik-spitter-api.herokuapp.com/api/sitings")
