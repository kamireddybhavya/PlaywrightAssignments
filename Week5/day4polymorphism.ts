class APIClient{
    sendRequest (endpoint:string):void;
    sendRequest(endpoint:string,requestBody:string,requestStatus:boolean):void;

    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean):void{
        if(requestBody !== undefined && requestStatus !== undefined){
            console.log(`endpoint: ${endpoint} requestStatus: ${requestStatus} requestBody: ${requestBody}`)
        }
        else{
            console.log(`endpoint: ${endpoint}`)
        }
}
}
const apiclient = new APIClient();
apiclient.sendRequest("https://api.example.com/users");
apiclient.sendRequest("https://api.example.com/users", '{"name":"Bhavya"}',true);
