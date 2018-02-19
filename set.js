const unique = (values) =>
    values.filter((value, index, self) => self.indexOf(value) === index)

class CustomSet {
    constructor(values = []) {
        this._values = unique(values)
    }

    get values() {
        return this._values
    }

    get size() {
        return this.values.length
    }

    add(values) {
        return this._values = unique(this.values.concat(values))
    }

    delete(value) {
        const index = this.values.indexOf(value)
        if (index !== -1) {
            this.values.splice(index, 1)
            return true
        } else {
            return false
        }
    }

    deleteAll(values) {
        values.forEach(value => {
            this.delete(value)
        })
        return this.values
    }

    has(value) {
        return this.values.includes(value)
    }

    hasAll(values) {
        let truthy = true
        values.forEach(value => {
            if (!this.has(value)) {
                truthy = false
            }
        })
        return truthy
    }

    clear() {
        this._values = []
    }

    forEach(callbackFunction) {
        this.values.forEach(value => callbackFunction(value))
    }

    union(set) {
        return new CustomSet(this.values.concat(set.values))
    }

    intersect(set) {
        const intersectValues = this.values.filter(value => set.has(value))
        return new CustomSet(intersectValues)
    }

    setDifference(set) {
        const diffValues = this.values.filter(value => !set.has(value))
        return new CustomSet(diffValues)
    }

    symmetricDifference(set) {
        const union = this.union(set)
        const intersect = this.intersect(set)
        const symDifference = union.setDifference(intersect)
        return symDifference
    }

    product(set) {
        const prod = []
        this.forEach(item1 => {
            set.forEach(item2 => {
                prod.push([item1, item2])
            })
        })
        return prod.sort()
    }
}

export default CustomSet
