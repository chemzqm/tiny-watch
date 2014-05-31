#tiny-watch

Start livereload server and watch for specified file changes.

* growl notification
* timestamp
* glob files


## Install

    npm install tiny-watch

## Usage

```
  Usage: tiny-watch *.js *.html *.css *.php

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Script

you need to add livereload script to html by you own.

``` html
<!-- livereload snippet -->
<script>
document.write('<script src="http://'
  + (location.host || 'localhost').split(':')[0]
  + ':35729/livereload.js?snipver=1"><\/script>')
  </script>
```

## Licence

MIT
