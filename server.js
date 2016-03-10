var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    middleware = require('./controllers/middleware'),
    port = 9000;

app.use(bodyParser.json());
app.use(middleware.addHeaders);

require('./routes/mainRoutes')(app);

app.listen(port, function() {
  console.log('Listening on ', + port);
});
