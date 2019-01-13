function fib(n,callback){
 try{
     if(n<1){
         throw new Error ("you should enter any positive integer greather than 1 ");
     }
     else {
         callback(null,function(){
             var a=[];
             x=1,y=0;
             for(i=0;i<n;i++){
                 var sum=x+y;
                 a.push(y);
                 y=x;
                 x=sum;
             }
             return a;
         });
     }
 } 
catch(error){
    callback(error,null);
   }
}

function solvefib(n){
    fib(n,function(err,arr){
        if(err){
            console.log(err);
        }
        else{
            console.log(arr(n));
        }
    });
}
 solvefib(6);