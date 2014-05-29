var fs = require('fs');
var spawn = require('win-spawn');
var glob = require('glob');
var path = require('path');
var http = require('http');

var options = {
  host: 'localhost',
  port: 35729,
  path: '/changes'
}

function watch (file, cb) {
  if (~file.indexOf('*')) {
    glob(file, function (err, files) {
      if (err) cb(err);
      files.forEach(function(file) {
        watch(file, cb);
      })
    })
  } else {
    fs.watchFile(file, {interval: 200}, function(){
      cb(null, file)
    })
  }
}


module.exports = function (files, cb) {
  files.forEach(function (file) {
    watch(file, function(err, f) {
      if (err) throw err;
      cb(f);
    })
  })
}
