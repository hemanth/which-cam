# which-cam [![Build Status](https://travis-ci.org/hemanth/which-cam.svg?branch=master)](https://travis-ci.org/hemanth/which-cam)

> which cam was used to take this pic?


## Install

```
$ npm install --save which-cam
```


## Usage

```js
const whichCam = require('which-cam');

whichCam('path_to_pic').then(console.log).catch(console.error)'
```

## CLI

```
$ npm install --global which-cam
```

```
$ which-cam --help

  Usage
    which-cam [input]

  Examples
    $ which-cam  eow.jpeg
    Nikon D5000
```


## License

MIT © [Hemanth.HM](https://h3manth.com)
