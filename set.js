const unique = (values) =>
    values.filter((value, index, self) => self.indexOf(value) === index)

class CustomSet {
    constructor(values = []) {
        this._values = unique(values)
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

    get size() {
        return this._values.length
    }

    get values() {
        return this._values
    }
}

export default CustomSet
