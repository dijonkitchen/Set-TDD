import CustomSet from '../set'

test('creates a new CustomSet', () => {
    expect(new CustomSet).toBeTruthy()
})

test('default new CustomSet is empty', () => {
    const newSet = new CustomSet
    expect(newSet.values).toEqual([])
})

test('can pre-populate a new Set', () => {
    const newSet = new CustomSet([1,2])
    expect(newSet.values).toEqual([1,2])
})
