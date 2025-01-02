import axios from "axios";

const API_URL = "http://localhost:8080/user";

export type AllUsers = {
    id:string,
    email: string,
    name: string | null,
}

export const fetchAllUsers = async (token: string | null) => {
    const response = await fetch(`${API_URL}/all-users?Token=${token}`);
    if(!response.ok){
        console.log("Error occured fetching all users ");
    } else {
        const data = await response.json();
        return data;
    }
}

export const addFriend = async (userId: string | null , friendId: string | null , token: string| null) => {
    const respose = await axios.post(`${API_URL}/${userId}/add-friend/${friendId}?Token=${token}`);
    return respose.data.status;
}

export const removeFriend = async (userId: string | null , friendId: string | null , token: string| null) => {
    const respose = await axios.delete(`${API_URL}/${userId}/remove-friend/${friendId}?Token=${token}`);
    console.log(respose);
    return respose;
}

export const InviteUser = async (token: string | null , userName: string | null, friendEmail: string | null) => {
    const response = await axios.post(`${API_URL}/email/invitation?Token=${token}`, {
        from_userName: userName,
        to_email: friendEmail
    });

    return response.data;
}