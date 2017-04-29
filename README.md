# jstransformer-eco

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-eco.svg)](https://greenkeeper.io/)

[Eco](http://npm.im/eco) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-eco/master.svg)](https://travis-ci.org/jstransformers/jstransformer-eco)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-eco/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-eco)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-eco/master.svg)](http://david-dm.org/jstransformers/jstransformer-eco)
[![NPM version](https://img.shields.io/npm/v/jstransformer-eco.svg)](https://www.npmjs.org/package/jstransformer-eco)


## Installation

    npm install jstransformer-eco

## API

```js
var eco = require('jstransformer')(require('jstransformer-eco'))

eco.render('blah').body
//=> 'blah'
```

## License

MIT
