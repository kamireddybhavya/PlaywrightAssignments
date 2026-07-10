class Calculation{
    add(a:number,b:number){
      console.log(a+b)
    }
    private sub(a:number,b:number){
 console.log(a-b)
    }
    protected mul(a:number,b:number){
        console.log(a*b)
    }
}
const calculate = new Calculation()
calculate.add(10,5)
//calculate.mul(5,2)
//calculate.sub(10,5)

class multiplication extends Calculation{
    
    display(){
        this.mul(5,2)
    }   
}
const cal = new multiplication()
cal.display()
