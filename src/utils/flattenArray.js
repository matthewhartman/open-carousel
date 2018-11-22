const flattenArray = array => (
  array.reduce((a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b), [])
)

export default flattenArray