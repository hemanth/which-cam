'use strict';
let pify = require('pify');

module.exports = (image) => pify(require('exif'))({image});
