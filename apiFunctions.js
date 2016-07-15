var request = require('superagent')
var env = require('dotenv')
var Twitter = require('twitter')
var Tumblr = require('tumblr.js')

env.load()

var twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

var client = Tumblr.createClient({
  consumer_key: process.env.TUMBLR_CONSUMER_KEY,
  consumer_secret: process.env.TUMBLR_CONSUMER_SECRET,
  token: process.env.TUMBLR_TOKEN,
  token_secret: process.env.TUMBLR_TOKEN_SECRET
})

function postToSlack(message) {
  request
    .post(process.env.SLACK_WEBHOOK)
    .send({text: message})
    .set('Content-Type', 'application/json')
    .end(function(err, res) {
      if (err) {
        console.log("Slack Error: ", err)
      } else {
        console.log("Hit Slack")
        // console.log("Successfully sent slack message", message)
      }
    })
}

function postToTwitter(message) {
  twitter.post('statuses/update', { status: message }, function(err, tweets, res){
    if (err) {
      console.log("Twitter Error: ", err)
    } else {
      console.log("Hit Twitter")
      // console.log("Successfully sent tweet:", tweets)
    }
  })
}

// function postToTumblr(message) {
//   Tumblr(message, 'genericstuff', tumblr_auth, function(error, response) {
//     console.log("Hit Tumblr")
//   })
// }

function postToTumblr(message) {
  client.createTextPost('genericstuff', {type: 'text', title: 'Sleepyhead', body: message }, function(err, res) {
    if (err) {
      console.log(err)
    } else {
      console.log('Hit Tumblr')
    }
  })
}

var number = Math.floor(Math.random() * (1 - 99)) + 99


function post(api) {
  console.log('Rolled ', number, ' and hit ', api)
}

if (number > 66) {
  // postToTwitter('Test: RNG was ' + number)
  post('twitter')
} else if (number < 66 && number > 33) {
  // postToTumblr('Test: RNG was ' + number)
  post('tumblr')
} else {
  // postToSlack('Test: RNG was ' + number)
  post('slack')
}
