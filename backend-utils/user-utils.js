import { API_URL } from "./url";
const signin = async (email, password) => {
    const response = await fetch(`${API_URL}api/v1/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        email,
      }),
    });
    console.log(response)
    return response;
  };
const register = async (userData) =>{
    console.log(userData)
    const response = await fetch(`${API_URL}api/v1/user/register`,{
      method : "POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify({
       userData
      })
    })
    console.log(response)
    return response;
  }

  const changePassword = async (email, previousPassword, newPassword) =>{
    console.log(userData)
    const response = await fetch(`${API_URL}api/v1/user/change-password`,{
      method : "POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify({
       email,
       previousPassword,
       newPassword
      })
    })
    console.log(response)
    return response;
  }
export {signin,register,changePassword}