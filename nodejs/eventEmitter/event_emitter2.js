var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person,events.EventEmitter);

var james = new Person('james');
var marry = new Person('marry');
var ryu = new Person('ryu');
var people = [james,marry,ryu];

people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name+' said: '+mssg);
    });
});

james.emit('speak','hey dudes');
ryu.emit('speak','I want a curry');
