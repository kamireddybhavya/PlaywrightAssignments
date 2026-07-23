import {test,expect} from "@playwright/test"
let acc_Token:any
let token_type:any
let id:any
test.describe.serial("run in serial mode",()=>{
test("ServiceNow API Testing Change Request",async({request})=>{
   
    let Token = await request.post('https://dev398647.service-now.com/oauth_token.do',
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            form:{
                "grant_type":"password",
                "client_id":"b58a504a54504797a6ae4bf464cab97d",
                "client_secret":"LRQrkeIAB39P-;z;Tq@|E0(G+{{4R)$e",
                "username":"admin",
                "password":"bDvYl-w08E^V"
            }
        }
    )
     const tokenresponse = await Token.json()
     console.log(tokenresponse)
    acc_Token = tokenresponse.access_token
    token_type = tokenresponse.token_type
})

test("Creating a changeRquest",async({request})=>{
    let createResponse = await request.post('https://dev398647.service-now.com/api/now/table/change_request',
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${token_type} ${acc_Token}`
            },
            data:{
                "short_description": "Got a network issue in service now"
            }
        }
    )
    let response1= await createResponse.json()
    console.log(response1)

    let status = createResponse.status()
    console.log(status)

    expect(status).toBe(201)
    console.log(createResponse.statusText())
    expect(createResponse.statusText()).toBe('Created')
     id = response1.result.sys_id
    console.log(id)
})

test("Fetch the Change Request",async({request})=>{
   let fetchResponse =  await request.get(`https://dev398647.service-now.com/api/now/table/change_request/${id}`,
    {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${token_type} ${acc_Token}`
        }
    }
   )
    let response2 = await fetchResponse.json()
    console.log(response2)
    expect(fetchResponse.status()).toBe(200)
    console.log(fetchResponse.status())
    expect(fetchResponse.statusText()).toBe('OK')
    console.log(fetchResponse.statusText())
})
test("update the ChangeRequest",async({request})=>{
let updateResponse = await request.patch(`https://dev398647.service-now.com/api/now/table/change_request/${id}`,
    {
        headers:{
             "Content-Type":"application/json",
            "Authorization":`${token_type} ${acc_Token}`
        },
        data:{
            "short_description": " change Request resolved through Playwright with API"
        }
    }
    
    )
    let response3 = await updateResponse.json()
    console.log(response3)
    expect(updateResponse.status()).toBe(200)
    console.log(updateResponse.status())
    expect(updateResponse.statusText()).toBe('OK')
    console.log(updateResponse.statusText())

})
test("delete the incident",async({request})=>{
let deleteResponse = await request.delete(`https://dev398647.service-now.com/api/now/table/change_request/${id}`,
    {
        headers:{
             "Content-Type":"application/json",
            "Authorization":`${token_type} ${acc_Token}`
        }
    }
    
    )
    console.log(deleteResponse.status())
    expect(deleteResponse.status()).toBe(204)
    console.log(deleteResponse.statusText())
    expect(deleteResponse.statusText()).toBe('No Content')
})
}) 
