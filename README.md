
### safeGet(obj,path)
> get a nested value from obj by path like 'a.b.c' or ['a','b','c']

### Install
```
npm install l-safeget -S
```
### Usage
```js
var safeGet = require("l-safeget");
var testData = { a: [{ c: { b: [233] } }] };
safeGet(testData,'a[0].c.b[0]') //=> 233
safeGet(testData,['a','0','c','b','0'])  //=> 233
```