import test from 'ava';
import fn from './';

test.cb('no exif data', t => {
	fn('./fixtures/no-exif.jpg')
	.catch(e => {
		t.is(e.code, 'NO_EXIF_SEGMENT');
		t.end();
	});
});

test.cb('exif data', t => {
	fn('./fixtures/with-exif.jpg')
	.then(exfi => {
		t.is(exfi.image.Model, 'NIKON D5000');
		t.end();
	});
});

test.cb('unsupported file type', t => {
	fn('./fixtures/unsupported.jpg')
	.catch(e => {
		t.is(e.name, 'Error');
		t.end();
	});
});
