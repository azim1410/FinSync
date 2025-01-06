import axios from "axios";

const API_URL = "http://localhost:8080/group";

export const createGroup = async (userid: string, token:string | null, grpname: string, memberIds : string[] | null) =>{
    const response = await axios.post(`${API_URL}/create/${userid}?Token=${token}`,
        { name: grpname,
            memberIds : memberIds
         });
    return response.data;
}

export const getGroupInfo = async (groupId : string | null, token: string | null) => {
    const response = await axios.get(`${API_URL}/${groupId}?Token=${token}`);
    return response.data;
}