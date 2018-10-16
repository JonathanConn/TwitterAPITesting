console.log("bot is starting");

var Twit = require('twit')

var T = new Twit({
  consumer_key:         'EkThYMeteBowInnRcE014hN47',
  consumer_secret:      'WWJMH1WMcdmnkh5vZJUtQTS5fecCF8QstrLB3Ara2rrJNB8sKK',
  access_token:         '3692376076-t4pNeulz7BTBtBNdGrBYIkxqqjcXQke1SquPkrx',
  access_token_secret:  'E0Xg8ejLaRz9uB0lmmof2W5fB6dwNXRhOr23FGBaPeXVZ'
})
T.post('statuses/update', { status: 'I am a bot!' }, function(err, data, response) {
  console.log(data)
})
