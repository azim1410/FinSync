
const API_URL = 'http://localhost:8080/user';

export const fetchUserData = async (userId: string | null, token: string | null) => {
    const response = await fetch(`${API_URL}/${userId}?Token=${token}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
    return response.json();
}

