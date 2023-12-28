import { BASE_API_URL } from "../../config/Api"
import { LOGIN, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER } from "./ActionType"

export const register = (data)=> async(dispatch) =>{
    try {
        const res = await fetch(`${BASE_API_URL}/api/auth/signup`,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)
        })
        const resData = await res.json()
        if(resData.jwt)localStorage.setItem("token" , resData.jwt)
        dispatch({type:REGISTER, payload:resData})
    } catch (error) {
        console.error("catch error ", error)
    }
}

// export const login = (data)=> async(dispatch) =>{
//     try {
//         const res = await fetch(`${BASE_API_URL}/api/auth/login`,{
//             method:"POST",
//             headers:{
//                 "Content-Type" : "application/json"
//             },
//             body:JSON.stringify(data)
//         })
//         console.log("data : ", data )
//         const resData = await res.json()
//         dispatch({type:LOGIN, payload:resData})
//         console.log("resData : ", resData )
//     } catch (error) {
//         console.log("catch error ", error)
//     }
// }

// Assuming you have already defined the LOGIN action type and BASE_API_URL

export const login = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const resData = await res.json();
  
      // Assuming the structure of your API response contains a 'jwt' property
      localStorage.setItem("token", resData?.jwt);
  
      // Dispatch the LOGIN action with the response data
      dispatch({ type: LOGIN, payload: resData });
  
      // Handle success, e.g., show a success message to the user
      console.log("Success:", resData?.jwt);
  
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error('Error:', error);
    }
  };
  

export const currentUser = (token)=> async(dispatch) =>{
    try {
        const res = await fetch(`${BASE_API_URL}/user/profile`,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`
            },
        })
        const resData = await res.json()
        dispatch({type:REQ_USER, payload:resData})
    } catch (error) {
        console.log("catch error ", error)
    }
}

export const searchUser = (data)=> async(dispatch) =>{
    try {
        const res = await fetch(`${BASE_API_URL}/users/search?name=${data.keyword}`,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
        })
        const resData = await res.json()
        dispatch({type:SEARCH_USER, payload:resData})
    } catch (error) {
        console.log("catch error ", error)
    }

}

export const updateUser = (data)=> async(dispatch) =>{
    try {
        const res = await fetch(`${BASE_API_URL}/user/update/${data.id}`,{
            method:"PUT",
            headers:{
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body:JSON.stringify(data),
            
        })
        const resData = await res.json()
        console.log("resData ", resData)
        dispatch({type:UPDATE_USER, payload:resData})
    } catch (error) {
        console.log("catch error ", error)
    }
}

