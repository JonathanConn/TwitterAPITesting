console.log("bot is starting");

var Twit = require('twit')
var data = [];
var dataCount = [{word: "", count: 0}];


var T = new Twit({
  consumer_key:         'EkThYMeteBowInnRcE014hN47',
  consumer_secret:      'WWJMH1WMcdmnkh5vZJUtQTS5fecCF8QstrLB3Ara2rrJNB8sKK',
  access_token:         '3692376076-t4pNeulz7BTBtBNdGrBYIkxqqjcXQke1SquPkrx',
  access_token_secret:  'E0Xg8ejLaRz9uB0lmmof2W5fB6dwNXRhOr23FGBaPeXVZ'
})

var stream = T.stream('statuses/sample')

stream.on('tweet', function (tweet) {
  var str = tweet.text.split(" ");

  for(var i = 0; i < str.length; i++){
      data.push(str[i]);
  }

  // for(var i = 0; i < data.length; i++){
  //     console.log(data[i]);
  // }


  // for(var i = 0; i < dataCount.length; i++){
  //   for(var j = 0; j < data.length; j++){
  //     if(data[j] != dataCount[i].word && data[j] != " "){
  //       dataCount.push({word: data[j], count: 0})
  //     }else{
  //       dataCount[i].count++;
  //     }
  //   }
  //   console.log(dataCount)
  // }

  for(var i = 0; i < data.length; i++){
    for(var j = 0; j < dataCount.length; j++){
       console.log("data " + data[i]);
       var temp = dataCount[i].word
       console.log("datacount " + temp);
        if(data[i] == dataCount[j].word && data[i] != ''){
            dataCount.push({word: data[i], count: 0})
            console.log("count " + dataCount[j].word+" "+dataCount[j].count);
        }else{
            dataCount[j].count++;
        }
    }
  }

})
