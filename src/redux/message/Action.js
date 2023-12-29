import { CREATE_NEW_MESSAGE, GET_ALL_MESSAGE } from "./ActionType"

export const createMessage = (messageData)=>async(dispatch) =>{
    try {
        const res = await fetch("http://localhost:8080/api/message/create",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                Authentication : `Bearer ${messageData.jwt}`
            },
            body:JSON.stringify(messageData.jwt)
    })

    const data = await res.json()
    console.log("create chat ", data)
    dispatch({type:CREATE_NEW_MESSAGE, payload:data})
    } catch (error) {
        console.log("create sms error " , error)
    }
}

export const createChat = (reqData)=>async(dispatch) =>{
    try {
        const res = await fetch(`http://localhost:8080/api/message/chat/${reqData.chatId}`,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json",
                Authentication : `Bearer ${reqData.jwt}`
            },
    })

    const data = await res.json()
    console.log("create chat ", data)
    dispatch({type:GET_ALL_MESSAGE, payload:data})
    } catch (error) {
        console.log("get sms error " , error)
    }
}