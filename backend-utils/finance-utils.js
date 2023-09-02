import { API_URL } from "./url";

const createFinance = async (token,listOfFinance)=>{
    
const response = await fetch(`${API_URL}api/v1/user/finance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
        body:JSON.stringify({
            listOfFinance
          }),
      });
     
      return response;


}
const editFinance = async (token,id,finance)=>{

    const response = await fetch(`${API_URL}api/v1/user/Questions${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
        body:JSON.stringify({
            finance
          }),
      });
     
      return response;


}
const getFinance = async (token,id)=>{
    console.log(listOfQuestions)
    const response = await fetch(`${API_URL}api/v1/user/finance${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
       
      });
     
      return response;


}
const deleteFiance = async (token,id)=>{
    console.log(listOfQuestions)
    const response = await fetch(`${API_URL}api/v1/user/finance${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
       
      });
     
      return response;


}
const getFinances = async (token)=>{
  
    const response = await fetch(`${API_URL}api/v1/user/finance/last-week`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
       
      });
     
      return response;


}
const recentGetFinances = async (token)=>{
  
    const response = await fetch(`${API_URL}api/v1/user/finance/recent`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
       
      });
     
      return response;


}



export {createFinance,editFinance,getFinance,deleteFiance,recentGetFinances,getFinances}