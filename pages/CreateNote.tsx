import type { NextPage } from "next";
import { useState } from "react";
import DashboardLayouts from "../components/new-layo";
import { Box, Button, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import AutoResizeTextarea from "../components/autoresizeTextArea";
import {createNote} from '../backend-utils/notes'
import { useRouter } from "next/router";

type Note = {
  authorId: number;
  notes: string;
};

const CreateNotes: NextPage = () => {
    const router = useRouter()
  const [notes, setNotes] = useState<Note[]>([
    { authorId: 1, notes: "Note 1" },
    { authorId: 2, notes: "Note 2" },
    { authorId: 3, notes: "Note 3" },
    { authorId: 4, notes: "Note 4" },
    { authorId: 5, notes: "Note 5" },
  ]);

  const [selectedNote, setSelectedNote] = useState<string>("");
  const [loading,setLoading]= useState(false);

  const handleNoteCreate = () => {
    setLoading(true)
    createNote("d",1,selectedNote)
    .then((res) => res.json())
    .then((data)=>{
   
    })
    .finally(()=>{
        setLoading(false)
        router.push("home")
    })
    if (selectedNote.trim() !== "") {
      const newNote: Note = {
        authorId: notes.length + 1, // Auto-increment authorId
        notes: selectedNote,
      };
      setNotes([...notes, newNote]);
      setSelectedNote(""); // Clear the textarea
    }
  };

  return (
    <div>
      <DashboardLayouts>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <Paper
                sx={{
                  padding: 2,
                  maxHeight: "100vh",
                  overflow: "auto",
                  "&::-webkit-scrollbar": { display: "none" },
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
                }}
              >
                <AutoResizeTextarea
                  value={selectedNote}
                  onChange={(e) => setSelectedNote(e.target.value)}
                />
              </Paper>
              <Box
                
                sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
              >
                <Button disabled={selectedNote == '' || loading} sx={{ margin: 2 }} variant="contained" onClick={handleNoteCreate}>
                  Create Note
                </Button>
              </Box>
            </Grid>
           
          </Grid>
        </Box>
      </DashboardLayouts>
    </div>
  );
};

export default CreateNotes;
