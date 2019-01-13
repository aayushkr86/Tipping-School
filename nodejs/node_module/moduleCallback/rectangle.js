module.exports = function(x,y,callback){
    try{
        if(x<0||y<0){
            throw new Error("Rectangle dimensions should be greather than zero: l="+x+",and b="+y);    
        }
        else
             callback(null,{
                 perimeter:function(){
                     return(2*(x+y));
                 },
                 area:function(){
                     return(x*y);
                 }
             });
    }
    catch(Error){
        callback(Error,null);
    }
}