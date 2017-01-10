var request = require('superagent')

var url = 'http://localhost:3000/users'

module.exports = {
  getUser:getUser
}

function getUser (callback) {
  request.get(url)
   .end(function(err, res){
     if (err) {
       callback(err)
     }
     else {
       var user = res.body.users.map(function (user){
         user.details = 'default details'
         user.showingDetails = false
         return user
       })
       callback(null, users)
     }
   })
}
