var express = require('express');
var request = require('superagent');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views/');

app.use(express.static(__dirname + '/public'));

var NON_INTERACTIVE_CLIENT_ID = 'YOUR-CLIENT-ID'
var NON_INTERACTIVE_CLIENT_SECRET = 'YOUR-CLIENT-SECRET'

var authData = {
  client_id: NON_INTERACTIVE_CLIENT_ID,
  client_secret: NON_INTERACTIVE_CLIENT_SECRET,
  grant_type: 'client_credentials',
  audience: 'YOUR-API-IDENTIFIER'
}

// First, authenticate this client and get an access_token
// This could be cached
function getAccessToken(req, res, next){
  request
    .post('https://YOUR-AUTH0-DOMAIN.auth0.com/oauth/token')
    .send(authData)
    .end(function(err, res) {
      req.access_token = res.body.access_token
      next();
    })
}

app.get('/', function(req, res){
  res.render('index');
})

app.get('/xxxx', getAccessToken, function(req, res){
  request
    .get('http://localhost:8080/xxxx')
    .set('Authorization', 'Bearer ' + req.access_token)
    .end(function(err, data) {
      console.log(data);
      if(data.status == 403){
        res.send(403, '403 Forbidden');
      } else {
        var movies = data.body;
        res.render('xxxx', { xxxx: xxxx} );
      }
    })
})

app.get('/yyyyyy', getAccessToken, function(req, res){
  request
    .get('http://localhost:8080/yyyyyy')
    .set('Authorization', 'Bearer ' + req.access_token)
    .end(function(err, data) {
      if(data.status == 403){
        res.send(403, '403 Forbidden');
      } else {
        var authors = data.body;
        res.render('yyyyyy', {yyyyyy : yyyyyy});
      }
    })
})

app.get('/zzz', getAccessToken, function(req, res){
  request
    .get('http://localhost:8080/zzz')
    .set('Authorization', 'Bearer ' + req.access_token)
    .end(function(err, data) {
      if(data.status == 403){
        res.send(403, '403 Forbidden');
      } else {
        var publications = data.body;
        res.render('zzz', {zzz : zzz});
      }
    })
})

// We’ve added the pending route, but calling this route from the MovieAnalyst Website will always result in a 403 Forbidden error as this client does not have the admin scope required to get the data.
app.get('/aaa', getAccessToken, function(req, res){
  request
    .get('http://localhost:8080/aaa')
    .set('Authorization', 'Bearer ' + req.access_token)
    .end(function(err, data) {
      if(data.status == 403){
        res.send(403, '403 Forbidden');
      }
    })
})


app.listen(3000);