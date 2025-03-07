// Regular fibonacci
function fibonacci() {
    const array = []
    let a = 0
    let b = 1
    for(let i = 0; i < 10; i++) {
        
        let next = a + b
        array.push(next)

        a = b
        b = next
        
    } 
    console.log(array);
}
fibonacci();

// Solved with recurrision 
function fibonacciRec(n, start = 0) {
    let a = start
    let b = n

    if(b > 21) {
        return n
    } else {
        console.log(a)
        let next = a + b
        fibonacciRec(next, b)
    }
}

fibonacciRec(1)