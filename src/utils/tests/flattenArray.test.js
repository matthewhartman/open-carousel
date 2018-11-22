import flattenArray from '../flattenArray'

describe('flattenArray', () => {
  it('flat array', () => {
    const items = ['1','2','3','4']
    const result = flattenArray(items)
    expect(result).toEqual(items)
  })
  it('multi-dimensional array', () => {
    const items = ['1','2',['3'],'4', ['5', '6', ['7']]]
    const flattenedItems = ['1','2','3','4', '5', '6', '7']
    const result = flattenArray(items)
    expect(result).toEqual(flattenedItems)
  })
})