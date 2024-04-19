const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');


function fib (number){
    if (number == 0) {
        return 0
    } else if (number == 1) {
        return 1
    } else {
        return fib((number -1)) + fib((number - 2))
    }
}

const testTail =
    jsc.forall(jsc.nat, function(n){
        if(n >= 0) {
            return fib(n) == fibTailRec(n)
        }

    });

jsc.assert(testTail);

