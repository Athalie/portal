const express = require('express');
const path = require('path');

const app = express();

const env = process.env.NODE_ENV || 'development';

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};

if (env === 'production') {
  app.use(forceSSL());
}

app.use(express.static('./dist/portal'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/portal/index.html'));
});

app.listen(process.env.PORT || 8080);
