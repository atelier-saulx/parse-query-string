# parse-query-string

Minimal query string parser

Takes a string and gives you an object.

```js
import parseQueryString from '@saulx/parse-query-string'

parseQueryString('?haha&amount=1&word=bond') // => { haha: true, amount: 1, word: 'bond' }
```
