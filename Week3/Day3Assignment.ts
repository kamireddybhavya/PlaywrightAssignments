let testExecutionSummary = {
suiteName:'automation test suite',
totalTests:100,
passedTests :90,
failedTests:10,
executionTime:"10 minutes"
}
//Printing all properties value
console.log("suiteName: ",testExecutionSummary.suiteName)
console.log("totalTests: ",testExecutionSummary.totalTests)
console.log("passedTests: ",testExecutionSummary.passedTests)
console.log("failedTests: ",testExecutionSummary.failedTests)
console.log("executionTime:",testExecutionSummary.executionTime)
//Pass percentage
let percentage = (testExecutionSummary.passedTests/testExecutionSummary.totalTests)*100
console.log(`The Pass Percentage is ${percentage}%`)
//Execution Satus
if(testExecutionSummary.failedTests==0){
    console.log(" Execution Status is Passed")
}
else{
    console.log("Execution Status is Failed")
}
//conditional Statement
if(testExecutionSummary.failedTests==0){
    console.log("Execution Successful.")
}
else{
    console.log("Execution Completed with Failures.")
}
