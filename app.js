
/**
 * Module dependencies.
 */

var express = require('express'),
    gzippo = require('gzippo'),
    routes = require('./routes'),
    PGA = require('./routes/PGA'),
    request = require('request');

var app = module.exports = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //app.use(express.static(__dirname + '/public'));
  app.use(gzippo.staticGzip(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// PGA API
app.get('/api/leaderboard', PGA.leaderboard);
app.get('/api/setup', PGA.tournamentSetup)
app.get('/api/scorecard/:playerID', PGA.getScorecard)

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


// Start server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
