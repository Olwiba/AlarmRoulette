var request = require('superagent')

var message = process.argv[2]

request
  .post('https://hooks.slack.com/services/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')
  .send({text: message})
  .set('Content-Type', 'application/json')
  .end(function(err, res){
    if (err) {
      console.log(err)
    } else {
      console.log("Successfully sent", message)
    }
  })
