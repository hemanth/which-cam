'use strict';
let pify = ((m) => (m && m.default) ? m.default : m)(require('pify'));

module.exports = (image) => pify(require('exif'))({image});
