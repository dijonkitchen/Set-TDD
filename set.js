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
        this._values = unique(this._values.concat(values))
    }

    remove(values) {
        values.forEach(value => {
            const index = this._values.indexOf(value)
            if (index !== -1) {
                this._values.splice(this._values.indexOf(value), 1)
            }
        })
    }

    includes(value) {
        return this._values.includes(value)
    }

    includesAll(values) {
        let truthy = true
        values.forEach(value => {
            if (!this.includes(value)) {
                truthy = false
            }
        })
        return truthy
    }

    clear() {
        return this._values = []
    }
}

export default CustomSet
