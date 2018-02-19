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

test('delete a value in a Set', () => {
    const newSet = new CustomSet([1,2,3])
    newSet.delete(1)
    expect(newSet.values).toEqual([2,3])
    newSet.delete(3)
    expect(newSet.values).toEqual([2])
    newSet.delete(4)
    expect(newSet.values).toEqual([2])
})

test('delete values to a Set', () => {
    const newSet = new CustomSet([1,2,3])
    newSet.deleteAll([1,3])
    expect(newSet.values).toEqual([2])
})

test('delete values to a Set', () => {
    const newSet = new CustomSet([1,2,3])
    newSet.deleteAll([1,4])
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
    expect(newSet.has(3)).toEqual(true)
    expect(newSet.has(0)).toEqual(false)
})

test('can check if all items are included in a Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    expect(newSet.hasAll([1,3])).toEqual(true)
    expect(newSet.hasAll([0,1])).toEqual(false)
})

test('can clear all the items in a Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    newSet.clear()
    expect(newSet.size).toEqual(0)
})

test('can iterate through Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    let newArray = []
    newSet.forEach(item => newArray.push(item))
    expect(newArray).toEqual(newSet.values)
})

test('can union Sets', () => {
    const newSet1 = new CustomSet([1,2,3])
    const newSet2 = new CustomSet([3,4,5])
    expect(newSet1.union(newSet2)).toEqual([1,2,3,4,5])
})

test('can intersect Sets', () => {
    const newSet1 = new CustomSet([1,2,3,4])
    const newSet2 = new CustomSet([3,4,5])
    expect(newSet1.intersect(newSet2)).toEqual([3,4])
})
