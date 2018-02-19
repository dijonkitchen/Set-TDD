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
        return this._values.length
    }

    add(values) {
        return this._values = unique(this._values.concat(values))
    }

    delete(value) {
        const index = this._values.indexOf(value)
        if (index !== -1) {
            this._values.splice(this._values.indexOf(value), 1)
        }
    }

    deleteAll(values) {
        values.forEach(value => {
            this.delete(value)
        })
    }

    has(value) {
        return this._values.includes(value)
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
        this._values.forEach(value => callbackFunction(value))
    }

    union(set) {
        return this.add(set.values)
    }
}

export default CustomSet
