class Report1{
    reportStep(msg:string,status:string):void;
     reportStep(msg:string,status:string,snap:boolean):void;
     reportStep(msg:string,status:string,snap?:boolean):void{
        if(snap !== undefined){
            console.log(`Report Step: ${msg} Status: ${status} Snap: ${snap}`)
        }
        else{
            console.log(`Report Step: ${msg} Status: ${status}`)
        }
}
}
const report =  new Report1();
report.reportStep("Login Test","Pass");
report.reportStep("Login Test","Fail",true);
