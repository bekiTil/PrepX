import { API_URL } from "./url";
const createNote = async (token,id, note) => {
    const response = await fetch(`${API_URL}api/v1/user/create-notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      authorization: `Bearer ${token}`,
      body: JSON.stringify({
        id,
        note,
      }),
    });
   
    return response;
  };
const listOfNotesById = async (token,UserId)=>{
    const response = await fetch(`${API_URL}api/v1/user/listOfNotebyId`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
        body: JSON.stringify({
          UserId,
          
        }),
      });
     
      return response;
}
const listOfNotes = async (token)=>{
    const response = await fetch(`${API_URL}api/v1/user/listOfNote`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${token}`,
        
      });
     
      return response;
}

export {createNote,listOfNotes,listOfNotesById}