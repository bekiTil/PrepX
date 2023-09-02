import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import DashboardLayouts from "../components/new-layo";
import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Cancel, Delete, Edit } from "@mui/icons-material";
import AutoResizeTextarea from "../components/autoresizeTextArea";

type Note = {
  authorId: number;
  notes: string;
};

const DashboardContributersNoteDe: NextPage = () => {
  const styles: { [name: string]: React.CSSProperties } = {
    container: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    textareaDefaultStyle: {
      padding: 5,
      width: 500,
      display: "block",
      resize: "none",
      backgroundColor: "#eee",
    },
  };

  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [notes, setNotes] = useState<Note[]>([
    { authorId: 1, notes: "Note 1" },
    { authorId: 2, notes: "Note 2" },
    { authorId: 3, notes: "Note 3" },
    { authorId: 4, notes: "Note 4" },
    { authorId: 5, notes: "Note 5" },
  ]);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // The value of the textarea
  const [value, setValue] = useState<string>();

  // This function is triggered when textarea changes
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedNote(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [selectedNote]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedAuthorIndex, setSelectedAuthorIndex] = useState<number | null>(null);

  const handleAuthorClick = (authorIndex: number) => {
    setSelectedNote(notes[authorIndex].notes);
    setSelectedAuthorIndex(authorIndex);
    setEditMode(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setSelectedNote(null);
    setEditMode(false);
  };

  const handleSaveClick = () => {
    const updatedNotes = [...notes];
    if (selectedAuthorIndex !== null) {
      updatedNotes[selectedAuthorIndex].notes = selectedNote || "";
      setNotes(updatedNotes);
      setEditMode(false);
    
    }
  };

  const handleDeleteClick = () => {
    if (selectedAuthorIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes.splice(selectedAuthorIndex, 1);
      setNotes(updatedNotes);
      setSelectedNote(null);
      setEditMode(false);
      setSelectedAuthorIndex(null);
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
                <Box>
                  AID
                </Box>
                 <Box
                      sx={{
                        width: "20%",
                        height: 50,
                        my:3,
                        border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                    {selectedAuthorIndex != null ? 
                    <p> {  notes[selectedAuthorIndex].authorId}</p>
                    :
                    <p>No Chosen Author</p>
                    }
                     
                    </Box>
                {editMode ? (
                  <AutoResizeTextarea value={selectedNote!} onChange={(e) => setSelectedNote(e.target.value)} />
                  // <textarea
                  //   ref={textareaRef}
                  //   style={styles.textareaDefaultStyle}
                  //   onChange={textAreaChange}
                  // >
                  //   {selectedNote}
                  // </textarea>
                ) : (
                  <Typography
                  padding={4}
                  variant="body1"
                  sx={{
                    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
                  }}
                >
                  {selectedNote}
                </Typography>
                )}
              </Paper>
              <Box
                width={100}
                sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
              >
                {editMode ? (
                  <>
                    <Button sx={{margin:2}}  variant="contained" onClick={handleSaveClick}>
                      Save
                    </Button>
                    <Button sx={{margin:2}}  variant="contained" onClick={handleCancelClick}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <IconButton color="info" onClick={handleEditClick}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={handleDeleteClick}>
                      <Cancel />
                    </IconButton>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">List from this author</Typography>
              <List>
                {notes.map((note, index) => (
                  <ListItem key={index}>
                    <Box
                      sx={{
                        width: "100%",
                        height: 50,
                        border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => handleAuthorClick(index)}
                    >
                      Author {note.authorId}
                    </Box>
                  </ListItem>
                ))}
              </List>
              <Grid />
            </Grid>
          </Grid>
        </Box>
      </DashboardLayouts>
    </div>
  );
};

export default DashboardContributersNoteDe;
