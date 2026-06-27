type PaymentMethod = "UPI"| "CreditCard" |"PayPal"
function makePayment(method:PaymentMethod){
console.log(method)
}
makePayment("UPI")
makePayment("CreditCard")

enum Environment {
    LOCAL = "LOCAL",
    DEVELOPMENT = "DEVELOPMENT",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION"
}

function runTests(environment: Environment): void {
    console.log("Running tests in:", environment);
}

runTests(Environment.LOCAL);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
