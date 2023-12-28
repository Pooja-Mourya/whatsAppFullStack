import axios from "axios";
export const BASE_API_URL = "http://localhost:/8080";
export const httpsService = ({method , path ,  data=null, params=null, success=()=>{}, error=()=>{}}) =>{
        const token = localStorage.getItem('accessToken')
        axios({
            baseURL: BASE_API_URL,
            url: path,
            data,
            params,
            method,
            headers: {
                Authorization: 'bearer '+token
            }
        }).then(res=>{
            success(res?.data)
        }).catch(e=>{
            error(e)
        })
    
    }

    