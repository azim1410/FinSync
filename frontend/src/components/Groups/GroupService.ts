import axios from "axios";

const API_URL = "http://localhost:8080/group";

export const createGroup = async (userid: string, token:string | null, grpname: string) =>{
    const response = await axios.post(`${API_URL}/create/${userid}?Token=${token}`,{ name: grpname });
    return response.data;
}