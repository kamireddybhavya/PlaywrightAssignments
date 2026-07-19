interface Payments {
    cashOnDelivery():void 
    upiPayments():void 
    cardPayments():void 
    internetBanking():void 
}
abstract class  CanaraBank implements Payments{
    abstract cashOnDelivery():void 
    abstract upiPayments():void 
    abstract cardPayments():void 
    abstract internetBanking():void 
    abstract recordPaymentDetails():void
}
class  Amazon extends CanaraBank{
    cashOnDelivery() {
        console.log("Payment on delivery")
    }
    upiPayments() {
        console.log("Payment through UPI")
    }
    cardPayments() {
        console.log("Payment through Card")
    }           
    internetBanking() {
        console.log("Payment through Internet Banking")
    }
    recordPaymentDetails() {
        console.log("Payment details recorded")
    }
}
const amazon =new Amazon()
amazon.cashOnDelivery()
amazon.upiPayments()
amazon.cardPayments()
amazon.internetBanking()
amazon.recordPaymentDetails()
