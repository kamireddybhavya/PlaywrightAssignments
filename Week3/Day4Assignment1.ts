//Factorial
function factorial(n: number): number {

    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.")
    }
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result*i
    }
    return result
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(-1));
