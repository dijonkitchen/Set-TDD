const unique = (values) =>
    values.filter((value, index, self) => self.indexOf(value) === index)

class CustomSet {
    constructor(values = []) {
        this.values = unique(values)
    }

    add(values) {
        this.values = unique(this.values.concat(values))
    }
}

export default CustomSet
