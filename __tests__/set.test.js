import CustomSet from '../set'

test('creates a new Set', () => {
    expect(new CustomSet).toBeTruthy()
})

test('new Set is empty', () => {
    const newSet = new CustomSet
    expect(newSet.values).toEqual([])
})

test('construct a new Set', () => {
    const newSet = new CustomSet([1, {a: 1, b: 2}])
    expect(newSet.values).toEqual([1, {a: 1, b: 2}])
})

test("construct without duplicates", () => {
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

test('delete many values in a Set', () => {
    const newSet = new CustomSet([1,2,3])
    newSet.deleteAll([1,3])
    expect(newSet.values).toEqual([2])
})

test('delete many values in a Set', () => {
    const newSet = new CustomSet([1,2,3])
    newSet.deleteAll([1,4])
    expect(newSet.values).toEqual([2,3])
})

test('size of a Set', () => {
    const newSet = new CustomSet([1,2,3])
    expect(newSet.size).toEqual(3)
})

test('size of a Set', () => {
    const newSet = new CustomSet(['a', 'b'])
    expect(newSet.size).toEqual(2)
})

test('size of a Set', () => {
    const newSet = new CustomSet
    expect(newSet.size).toEqual(0)
})

test('size is read-only', () => {
    const newSet = new CustomSet
    expect(() => {newSet.size = 5}).toThrow()
    expect(newSet.size).toEqual(0)
})

test('values are read-only', () => {
    const newSet = new CustomSet([3])
    expect(() => {newSet.values = [5, 5, 5]}).toThrow()
    expect(newSet.values).toEqual([3])
})

test('has an item included inside Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    expect(newSet.has(3)).toEqual(true)
    expect(newSet.has(0)).toEqual(false)
})

test('has all items included in a Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    expect(newSet.hasAll([1,3])).toEqual(true)
    expect(newSet.hasAll([0,1])).toEqual(false)
})

test('clear all the items in a Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    newSet.clear()
    expect(newSet.size).toEqual(0)
})

test('iterate through Set', () => {
    const newSet = new CustomSet([3,1,2312,123,23])
    let newArray = []
    newSet.forEach(item => newArray.push(item))
    expect(newArray).toEqual(newSet.values)
})

test('union Sets immutably', () => {
    const array1 = [1,2,3]
    const array2 = [3,4,5]
    const newSet1 = new CustomSet(array1)
    const newSet2 = new CustomSet(array2)
    expect(newSet1.union(newSet2).values).toEqual([1,2,3,4,5])
    expect(newSet1.values).toEqual(array1)
    expect(newSet2.values).toEqual(array2)
})

test('intersect Sets immutabily', () => {
    const array1 = [1,2,3,4]
    const array2 = [3,4,5]
    const newSet1 = new CustomSet(array1)
    const newSet2 = new CustomSet(array2)
    const expectedSet = newSet1.intersect(newSet2)
    expect(expectedSet.values).toEqual([3,4])
    expect(newSet1.values).toEqual(array1)
    expect(newSet2.values).toEqual(array2)
})

test('set difference between Sets immutabily', () => {
    const array1 = [1,2,3,4]
    const array2 = [3,4,5]
    const newSet1 = new CustomSet(array1)
    const newSet2 = new CustomSet(array2)
    const expectedSet = newSet1.setDifference(newSet2)
    expect(expectedSet.values).toEqual([1,2])
    expect(newSet1.values).toEqual(array1)
    expect(newSet2.values).toEqual(array2)
})

test('set difference between Sets immutabily', () => {
    const array1 = [1,2,3,4]
    const array2 = [3,4,5]
    const newSet1 = new CustomSet(array1)
    const newSet2 = new CustomSet(array2)
    const expectedSet = newSet2.setDifference(newSet1)
    expect(expectedSet.values).toEqual([5])
    expect(newSet1.values).toEqual(array1)
    expect(newSet2.values).toEqual(array2)
})

test('symmetric difference between Sets immutabily', () => {
    const array1 = [1,2,3,4]
    const array2 = [3,4,5]
    const newSet1 = new CustomSet(array1)
    const newSet2 = new CustomSet(array2)
    const expectedSet1 = newSet1.symmetricDifference(newSet2)
    const expectedSet2 = newSet2.symmetricDifference(newSet1)
    expect(expectedSet1.values).toEqual([1,2,5])
    expect(expectedSet2.values).toEqual([1,2,5])
    expect(newSet1.values).toEqual(array1)
    expect(newSet2.values).toEqual(array2)
})

test('product of Sets', () => {
    const array1 = ['red', 'blue']
    const array2 = [3,4]
    const newSet1 = new CustomSet(array1)
    const newSet2 = new CustomSet(array2)
    const expectedProduct1 = newSet1.product(newSet2)
    const expectedProduct2 = newSet2.product(newSet1)
    expect(expectedProduct1).toEqual([["blue", 3], ["blue", 4], ["red", 3], ["red", 4]])
    expect(expectedProduct2).toEqual([[3, "blue"], [3, "red"], [4, "blue"], [4, "red"]])
    expect(newSet1.values).toEqual(array1.sort())
    expect(newSet2.values).toEqual(array2.sort())
})

test('superset of a Set', () => {
    const array1 = [1,2,3,4]
    const array2 = [3,4]
    const newSet1 = new CustomSet(array1)
    const newSet2 = new CustomSet(array2)
    expect(newSet1.isSuperset(newSet2)).toEqual(true)
    expect(newSet2.isSuperset(newSet1)).toEqual(false)
})

test('commutative laws', () => {
    const array1 = [1,2,3]
    const array2 = [3,4,5]
    const newSet1 = new CustomSet(array1)
    const newSet2 = new CustomSet(array2)
    expect(newSet1.union(newSet2)).toEqual(newSet2.union(newSet1))
    expect(newSet1.intersect(newSet2)).toEqual(newSet2.intersect(newSet1))
})
