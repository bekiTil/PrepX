import { API_URL } from "./url";

const createQuestions = async (token,listOfQuestions)=>{
    console.log(listOfQuestions)
const response = await fetch(`${API_URL}api/v1/user/listOfQuestions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
        body:JSON.stringify({
            listOfQuestions
          }),
      });
     
      return response;


}
const editQuestion = async (token,id,listOfQuestions)=>{
    console.log(listOfQuestions)
    const response = await fetch(`${API_URL}api/v1/user/Questions${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
        body:JSON.stringify({
            listOfQuestions
          }),
      });
     
      return response;


}
const getQuestion = async (token,id)=>{
    console.log(listOfQuestions)
    const response = await fetch(`${API_URL}api/v1/user/Questions${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
       
      });
     
      return response;


}
const deleteQuestion = async (token,id)=>{
    console.log(listOfQuestions)
    const response = await fetch(`${API_URL}api/v1/user/Questions${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
       
      });
     
      return response;


}
const getQuestions = async (token)=>{
    console.log(listOfQuestions)
    const response = await fetch(`${API_URL}api/v1/user/Questions`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
       
      });
     
      return response;


}



export {createQuestions,editQuestion,getQuestion,deleteQuestion,getQuestions}