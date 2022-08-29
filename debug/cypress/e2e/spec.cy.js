function handle(arg) {
    let myInt = arg + 1
    let myStr = (myInt * 2).toString()
    let pair = new Pair(myInt, myStr)
    for (let i = 0; i < 10; i++) {
        let j = i * 2;
    }
}

describe('MySpec', () => {
    it('myTestDebug', () => {
        cy.wrap(1).then(arg => {
            handle(arg);
        })
    })
})

class Pair {
    a
    b

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
