const unique = (values) =>
    values.filter((value, index, self) => self.indexOf(value) === index)

interface CustomSet {
    _values: any[]
}
class CustomSet {
    constructor(values: any[] = []) {
        this._values = unique(values).sort()
    }

    get values() {
        return this._values
    }

    get size(): Number {
        return this.values.length
    }

    add(values) {
        return this._values = unique(this.values.concat(values))
    }

    delete(value): boolean {
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

    has(value): boolean {
        let truthy = false
        this.values.forEach(item => {
            if (item === value) {
                truthy = true
            }
        })
        return truthy
    }

    hasAll(values): boolean {
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

    union(set: CustomSet): CustomSet {
        return new CustomSet(this.values.concat(set.values))
    }

    intersect(set: CustomSet): CustomSet {
        const intersectValues = this.values.filter(value => set.has(value))
        return new CustomSet(intersectValues)
    }

    setDifference(set: CustomSet): CustomSet {
        const diffValues = this.values.filter(value => !set.has(value))
        return new CustomSet(diffValues)
    }

    symmetricDifference(set: CustomSet): CustomSet {
        const union = this.union(set)
        const intersect = this.intersect(set)
        const symDifference = union.setDifference(intersect)
        return symDifference
    }

    product(set: CustomSet): any[] {
        const prod = []
        this.forEach(item1 => {
            set.forEach(item2 => {
                prod.push([item1, item2])
            })
        })
        return prod
    }

    isSuperset(set: CustomSet): boolean {
        return this.hasAll(set.values)
    }
}

export default CustomSet
