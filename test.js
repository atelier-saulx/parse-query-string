const test = require('ava')
const parseQueryString = require('.')

test('it works', (t) => {
  const query = 'haha&amount=1&word=bond'
  const params = {
    haha: true,
    amount: 1,
    word: 'bond',
  }

  t.deepEqual(parseQueryString(query), params)
  t.deepEqual(parseQueryString(`?${query}`), params)
  t.deepEqual(parseQueryString(`https://example.com?${query}`), params)
})
