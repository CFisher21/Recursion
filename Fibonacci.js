// Regular fibonacci
function fibs(total) {
    const array = []
    let a = 0
    let b = 1
    let count = 0
    for(let i = 0; count < total; i++) {
        
        array.push(a)
        let next = a + b

        a = b
        b = next
        count++
    } 
    console.log(array);
}
fibs(8);

// Solved with recurrision 
function fibonacciRec(total, a = 0, b = 1, array = []) {
   if(total === 0) {
    return array
   } 

   array.push(a)

   return fibonacciRec(total - 1, b, a + b, array)
}

console.log(fibonacciRec(8))