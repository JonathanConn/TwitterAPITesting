console.log("bot is starting");

var Twit = require('twit')
var data = [];
var dataCount = [{word: "", count: 0}];
var counter = 0;


var T = new Twit({
  consumer_key:         'EkThYMeteBowInnRcE014hN47',
  consumer_secret:      'WWJMH1WMcdmnkh5vZJUtQTS5fecCF8QstrLB3Ara2rrJNB8sKK',
  access_token:         '3692376076-t4pNeulz7BTBtBNdGrBYIkxqqjcXQke1SquPkrx',
  access_token_secret:  'E0Xg8ejLaRz9uB0lmmof2W5fB6dwNXRhOr23FGBaPeXVZ'
})

var stream = T.stream('statuses/sample')

stream.on('tweet', function (tweet) {
  var str = tweet.text;
  counter++;
  addData(str);

//stop stream at 5
  if(counter == 5){
    stream.stop();
    outPrint();
  }

})

function addData(x){
  data.push(x);
}

function outPrint(){
  console.log(data);
}
