import CustomSet from '../set'

test('creates a new Set', () => {
    expect(new CustomSet).toBeTruthy()
})

test('default new Set is empty', () => {
    const newSet = new CustomSet
    expect(newSet.values).toEqual([])
})

test('can pre-populate a new Set', () => {
    const newSet = new CustomSet([1,2])
    expect(newSet.values).toEqual([1,2])
})

test("doesn't pre-populate with duplicates", () => {
    const newSet = new CustomSet([1,1])
    expect(newSet.values).toEqual([1])
})

test('add values to a Set', () => {
    const newSet = new CustomSet
    newSet.add([1])
    expect(newSet.values).toEqual([1])
})

test('add values to a Set', () => {
    const newSet = new CustomSet
    newSet.add([1,2,3])
    expect(newSet.values).toEqual([1, 2, 3])
})

test('add values to a Set', () => {
    const newSet = new CustomSet
    newSet.add([1,1,3])
    expect(newSet.values).toEqual([1,3])
})

test('add values to a Set', () => {
    const newSet = new CustomSet([1,2,3])
    newSet.add([1,1,3])
    expect(newSet.values).toEqual([1,2,3])
})

test('remove values to a Set', () => {
    const newSet = new CustomSet([1,2,3])
    newSet.remove([1,3])
    expect(newSet.values).toEqual([2])
})

test('remove values to a Set', () => {
    const newSet = new CustomSet([1,2,3])
    newSet.remove([1,4])
    expect(newSet.values).toEqual([2,3])
})

test('show size of a Set', () => {
    const newSet = new CustomSet([1,2,3])
    expect(newSet.size).toEqual(3)
})

test('show size of a Set', () => {
    const newSet = new CustomSet(['a', 'b'])
    expect(newSet.size).toEqual(2)
})

test('show size of a Set', () => {
    const newSet = new CustomSet
    expect(newSet.size).toEqual(0)
})

test('disable setting of size', () => {
    const newSet = new CustomSet
    expect(() => {newSet.size = 5}).toThrow()
    expect(newSet.size).toEqual(0)
})

test('disable setting of values', () => {
    const newSet = new CustomSet([3])
    expect(() => {newSet.values = [5, 5, 5]}).toThrow()
    expect(newSet.values).toEqual([3])
})

test('can check if an item is included inside Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    expect(newSet.includes(3)).toEqual(true)
    expect(newSet.includes(0)).toEqual(false)
})

test('can check if all items are included in a Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    expect(newSet.includesAll([1,3])).toEqual(true)
    expect(newSet.includesAll([0,1])).toEqual(false)
})

test('can clear all the items in a Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    expect(newSet.clear()).toEqual([])
    expect(newSet.size).toEqual(0)
})
