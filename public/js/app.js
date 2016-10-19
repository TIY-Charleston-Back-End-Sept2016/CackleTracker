
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
}

routerController()
