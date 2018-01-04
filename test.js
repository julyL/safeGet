require('mocha');
var assert = require('assert'),
    safeGet = require('./');

describe('get value:', function() {
    it('should get a value', function() {
        assert.strictEqual(safeGet("a"), undefined);
        assert.strictEqual(safeGet({ a: 'a', b: { c: 1 } }, 'b.c'), 1);
        assert.strictEqual(safeGet({ a: 'a', b: { c: 1 } }, ['b','c']), 1);
        assert.strictEqual(safeGet({ a: ['b', { c: 1 }] }, 'a.1.c'), 1);
        assert.strictEqual(safeGet({ a: ['b', { c: 1 }] }, 'a.[1].c'), 1);
        assert.strictEqual(safeGet({ a: ['b', { c: 1 }] }, ['a',1,'c']), 1);
        assert.strictEqual(safeGet({ a: ['b', { c: 1 }] }, ['a',[1],'c']), 1);
        assert.strictEqual(safeGet({ a: ['b', { c: 1 }] }, ['a',[2],'c']), undefined);
    });
});