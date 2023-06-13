import React from "react";
import QuestionBox from "../components/simple_card";
import NavbarAuth from "../components/headern";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import NoteBox from "../components/note-card";
import CourseCard from "../components/finance-card";
import CourseInfo from "../components/finance-card";

const Home: React.FC = () => {
  const questions = [
    { number: 145, question: "Question " },
    { number: 545, question: "Paid" },
    { number: 45, question: "Pending" },
    { number: 455, question: "Next Pay" },
    { number: 5, question: "Pay Date" },
    { number: 40, question: "Total" },
  ];
  const notes = [
    {
      subject: "Biology",
      note: "Pacemakers is an electronic device used to pace the heart when the normal conduction pathway is damaged or diseased.",
      topic: "Cardiology",
    },
    {
      subject: "Biology",
      note: "Pacemakers is an electronic device used to pace the heart when the normal conduction pathway is damaged or diseased.",
      topic: "Cardiology",
    },
    {
      subject: "Biology",
      note: "Pacemakers is an electronic device used to pace the heart when the normal conduction pathway is damaged or diseased.",
      topic: "Cardiology",
    },
    {
      subject: "Biology",
      note: "Pacemakers is an electronic device used to pace the heart when the normal conduction pathway is damaged or diseased.",
      topic: "Cardiology",
    },
  ];
  return (
    <div>
      <NavbarAuth />
      <Toolbar></Toolbar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
          px: 5,
        }}
      >
        <Container maxWidth={false}>
          <Typography>Analytics</Typography>
          <Grid container spacing={2} justifyContent="center">
            {questions.map((question) => (
              <Grid item lg={2} sm={6} xl={4} xs={12} key={question.number}>
                <QuestionBox
                  number={question.number}
                  title={question.question}
                />
              </Grid>
            ))}
          </Grid>

          <Grid
            sx={{ px: 8, mt: 2 }}
            container
            spacing={2}
            justifyContent="center"
          >
            <Grid item lg={6} md={6} xs={12}>
              <Card>
                <CardContent>
                  <Grid item lg={12} md={12} xs={12}>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                      minHeight={150}
                    >
                      <div className="">
                        <TextField
                          label="Create Questions"
                          InputProps={{
                            style: {
                              border: "none",
                            },
                          }}
                        ></TextField>
                      </div>
                    </Box>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Card>
                <CardContent>
                  <Grid item lg={12} md={12} xs={12}>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                      minHeight={150}
                    >
                      <div className="">
                        <TextField
                          label="Create Note"
                          InputProps={{
                            style: {
                              border: "none",
                            },
                          }}
                        ></TextField>
                      </div>
                    </Box>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Divider
            sx={{
              borderBottomWidth: "2px",
              my: 2,
              borderColor: "rgba(0, 0, 0, 0.87)",
            }}
          />
          <Typography>Recent</Typography>
          <Grid container spacing={2} justifyContent="center">
            {notes.map((note) => (
              <Grid item lg={6} md={6} xs={12} key={note.note}>
                <NoteBox
                  subject={note.subject}
                  note={note.note}
                  topic={note.topic}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
    </div>
  );
};

export default Home;
