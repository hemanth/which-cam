#!/usr/bin/env node
'use strict';
var meow = ((m) => (m && m.default) ? m.default : m)(require('meow'));
var whichCam = require('./');

var cli = meow([
	'Usage',
	'  $ which-cam [input]',
	'',
	'Examples',
	'  $ which-cam meow.jpg',
	'  '
]);

whichCam(cli.input[0])
.then(exif => console.log(exif.image.Model))
.catch(err => console.error(err));

