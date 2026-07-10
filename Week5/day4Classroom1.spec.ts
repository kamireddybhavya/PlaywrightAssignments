class Broswer{
browserType() {
console.log("Browser Type is Generic Browser");
}
broswerVersion(){
console.log("Browser Version is V138")
}
}
class Chrome extends Broswer{
  
launchBroswer(){
console.log("chrome is launched")
}
}
class Edge extends Broswer{    
launchBroswer(){
console.log("Edge is launched")
}    
}
const obj = new Chrome()
obj.browserType()
obj.broswerVersion()
obj.launchBroswer()

const obj2 = new Edge()
obj2.browserType()
obj2.broswerVersion()
obj2.launchBroswer()
