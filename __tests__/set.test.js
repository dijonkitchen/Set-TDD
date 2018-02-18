import CustomSet from '../set'

test('creates a new CustomSet', () => {
    expect(new CustomSet).toBeTruthy()
})

test('default new CustomSet is empty', () => {
    const newSet = new CustomSet
    expect(newSet.values).toEqual([])
})
