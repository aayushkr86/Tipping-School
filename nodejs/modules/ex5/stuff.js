module.exports.counter=function(arr){
    return 'There are '+arr.length+' elements in this array';
};

module.exports.adder = function(a,b){
    return `The sum of 2 numbers is ${a+b}`;
};

var pi = 3.142;
module.exports.pi = pi;