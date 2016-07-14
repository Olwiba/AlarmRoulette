var request = require('superagent')
var env = require('dotenv')
var Twitter = require('twitter')

env.load()

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
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
  client.post('statuses/update', { status: message }, function(err, tweets, res){
    if (err) {
      console.log("Twitter Error: ", err)
    } else {
      console.log("Hit Twitter")
      // console.log("Successfully sent tweet:", tweets)
    }
  })
}

var number = Math.floor(Math.random() * (1 - 100)) + 100

postToTwitter('@sentreh ' + number)
if (number < 50) {
} else {
  postToSlack(number)
}
