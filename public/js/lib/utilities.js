var forEach = function(arr, fn){
   for(var i = 0; i < arr.length; i += 1){
      fn(arr[i], i, arr)
   }
}
