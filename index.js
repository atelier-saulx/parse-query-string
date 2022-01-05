const reducer = (params, str) => {
  const [key, value] = str.split('=')
  if (key) {
    params[decodeURIComponent(key)] =
      value === undefined
        ? true
        : isNaN(value)
        ? decodeURIComponent(value)
        : Number(value)
  }
  return params
}

const parseQueryString = (string = location?.search || '') => {
  return string
    .substring(string.indexOf('?') + 1)
    .split('&')
    .reduce(reducer, {})
}

module.exports = parseQueryString
