const dojo = require('../src/index');
const test = require('ava');

// https://github.com/avajs/ava#assertions
test('Espero que a letra V seja 8', t => {
    t.is(dojo.traduza('V'), '8');
});

test('Espero que a letra I seja 4', t => {
    t.is(dojo.traduza('I'), '4');
});

test('Espero que VIVO seja 8486', t => {
    t.is(dojo.traduza('VIVO'), '8486');
});

test('Espero que ABC seja 222', t => {
    t.is(dojo.traduza('ABC'), '222');
});

test('Espero que DOJOMT seja 365668', t => {
    t.is(dojo.traduza('DOJOMT'), '365668');
});

test('Espero que 1-HOME-SWEET-HOME seja 1-4663-79338-4663 ', t => {
    t.is(dojo.traduza('1-HOME-SWEET-HOME'), '1-4663-79338-4663');
});

test('Espero que 878$&@ lance uma exception', t => {
	t.throws(function() {
    	dojo.traduza('878$&@')
  	},'Blablabla');
});

test('Espero que 8[]78{ lance uma exception', t => {
	t.throws(function() {
    	dojo.traduza('8[]78{')
  	},'Blablabla');
});

test('Espero que home4241 seja 46634241 ', t => {
    t.is(dojo.traduza('home4241'), '46634241');
});

test('Espero que #*35nk seja #*3565 ', t => {
    t.is(dojo.traduza('#*35nk'), '#*3565');
});


test('Espero que #*35 nk seja #*35065 ', t => {
    t.is(dojo.traduza('#*35 nk'), '#*35065');
});

test('Espero que parametro vazia seja vazia ', t => {
	t.throws(function() {
    	dojo.traduza()
  	},'Blablabla');
});


//TDD
//Test Driven Development
