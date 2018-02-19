const unique = (values) =>
    values.filter((value, index, self) => self.indexOf(value) === index)

class CustomSet {
    constructor(values = []) {
        this.values = unique(values)
    }

    add(values) {
        this.values = unique(this.values.concat(values))
    }

    remove(values) {
        values.forEach(value => {
            this.values.splice(this.values.indexOf(value), 1)
        })
    }
}

export default CustomSet
