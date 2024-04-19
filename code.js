function fibTailRec (number, a = 1, b = 0){
    if (number == 0) {
        return b
    } else {
        return fibTailRec((number - 1), (a + b) , a)
    }
}

//console.log(fibTailRec(0))
//The implementation of my tail recursion is taken from my version last semester, with the big updates
//being the readme.md and the alteration to code.test.js to properly work