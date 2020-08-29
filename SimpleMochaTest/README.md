I find that Jasmine is easier to setup out of the box than mocha.  Jasmine has a very nice getting started page that you copy into your project and unzip, and voila, you have an immediate, passing example test.  But I personally find mocha doesn't have an obvious getting started page.  

This serves as a quick example in case I need to quickly and experimentally unit test something in a project where mocha and chai are installed.

The test can be run with either:

```
$ npm test
```

Or without npm with:

```
$ node_modules/.bin/mocha test.js
```

If running without npm, we _must_ use the mocha binary included in node_modules binaries. Mac OS, at least my system, has a mocha system binary that seems to not be working for whatever reason. 
