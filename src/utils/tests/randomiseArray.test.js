import randomiseArray from '../randomiseArray'

describe('randomiseArray', () => {
  it('array', () => {
    const items = ['1','2','3','4','5','6','7']
    const result = randomiseArray(items)
    expect(result).not.toEqual(['1','2','3','4','5','6','7'])
  })
})