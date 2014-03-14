commitish
=========

generate fake commit sha1s.substr(0,6)s


```
var commitish = require('commitish');

console.log(commitish());
// a random hexadecimal string with str.length == 6, like '82edd4' or 'bf0b30'
```
