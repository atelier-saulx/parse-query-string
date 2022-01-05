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

const parseQueryString = (string = location?.search || '') =>
  string.split(/\?|&/).reduce(reducer, {})

export default parseQueryString
