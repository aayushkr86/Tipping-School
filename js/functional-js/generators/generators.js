var myGen = function*(){
    var one = yield 1;
    var two = yield 2;
    var three = yield 3;
    console.log(one,two,three);
};

var gen = myGen();
console.log(gen.next());
console.log(gen.next(1));
console.log(gen.next(2));
console.log(gen.next(3));

function smartCode(generator) {
    var gen = generator();
    var yieldedVal = gen.next().value;
    if(yieldedVal.then){
        yieldedVal.then(gen.next);
    }
}

Promise.coroutine(function* () {
    var tweets = yield $.get('tweets.json');
    console.log(tweets);
})();

Promise.coroutine(function* () {
  var tweets = yield $.get('tweets.json');
  var profile = yield $.get('profile.json');
  var friends = yield $.get('friends.json');
  console.log(tweets, profile, friends);
})();

Promise.coroutine(function* () {
  var data = yield {
    tweets: $.get('tweets.json'),
    profile: yield $.get('profile.json')
  };
  console.log(data.tweets, data.profile);
})();

Promise.coroutine(function* () {
  var [tweets, profile] = yield [$.get('tweets.json'), yield $.get('profile.json')];
  console.log(tweets, profile);
})();

