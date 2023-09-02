import type { NextPage } from "next";
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
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import QuestionBank from "../components/QuestionBank";
import QuestionBanks from "../components/QuestionBanks";

const initialQuestions:any = [
  {
    id: '10.5.3.6.4',
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
    explanation: 'Paris is the capital of France.',
  },
  {
    id: '10.5.3.6.5',
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
    explanation: 'Mars is often called the Red Planet due to its reddish appearance.',
  },
  {
    id: '10.5.3.6.6',
    question: 'What is the largest country by land area?',
    options: ['USA', 'Canada', 'Russia', 'China'],
    correctAnswer: 'Russia',
    explanation: 'Russia is the largest country in the world by land area.',
  },
  {
    id: '10.5.3.6.7',
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
    explanation: 'Plants absorb carbon dioxide from the atmosphere during photosynthesis.',
  },
  {
    id: '10.5.3.6.8',
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
    correctAnswer: 'William Shakespeare',
    explanation: 'William Shakespeare is the author of "Romeo and Juliet."',
  },
  {
    id: '10.5.3.6.9',
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Fe', 'Hg'],
    correctAnswer: 'Au',
    explanation: 'The chemical symbol for gold is Au, derived from the Latin word "aurum."',
  },
  {
    id: '10.5.3.6.10',
    question: 'Which gas is responsible for the ozone layer in the Earth\'s atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Ozone'],
    correctAnswer: 'Ozone',
    explanation: 'The ozone layer is composed of ozone (O3) molecules.',
  },
  {
    id: '10.5.3.6.11',
    question: 'What is the largest mammal in the world?',
    options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
    explanation: 'The blue whale is the largest mammal on Earth, both in size and weight.',
  },
  {
    id: '10.5.3.6.12',
    question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
    options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
    correctAnswer: 'Venus',
    explanation: 'Venus is often referred to as the "Morning Star" when it appears in the morning sky and the "Evening Star" when it appears in the evening sky.',
  },
  {
    id: '10.5.3.6.13',
    question: 'What is the largest organ in the human body?',
    options: ['Heart', 'Liver', 'Brain', 'Skin'],
    correctAnswer: 'Skin',
    explanation: 'The skin is the body\'s largest organ, serving as a protective barrier and regulating temperature.',
  },
  // Add more questions as needed
];


const DashboardContributersQuestio1: NextPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(initialQuestions);

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Filter out the current question from the arrays
  const filteredQuestions = questions.filter(
    (_:any, index:any) => index !== currentQuestionIndex
  );

  const filteredOptions = filteredQuestions.map((question:any) => question.options);
  const filteredSolutions = filteredQuestions.map(
    (question:any) => question.correctAnswer
  );
  const filteredExplanations = filteredQuestions.map(
    (question:any) => question.explanation
  );
  const filteredQues = filteredQuestions.map((question:any) => question.question);
  const filterIds = filteredQuestions.map((question:any) => question.id);

  // Prepare data for QuestionBanks component
  const questionsForQuestionBanks = filteredQuestions.map((question:any) => ({
    question: question.question,
    options: question.options,
    correctAnswer: question.correctAnswer,
  }));

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
            <Grid item md={10} xs={12}>
              <Box
                sx={{
                  padding: 2,
                  maxHeight: "100vh",
                  overflow: "auto",
                  "&::-webkit-scrollbar": { display: "none" },
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
                }}
              >
                <Box>QID</Box>
                <Box
                  sx={{
                    width: "20%",
                    height: 50,
                    my: 2,
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {currentQuestion.id}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <QuestionBank
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    correctAnswer={currentQuestion.correctAnswer}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "auto",
                      marginLeft: "auto",
                    }}
                  >
                    <IconButton onClick={handlePrevQuestion}>
                      <ChevronLeftIcon />
                    </IconButton>
                    <Box>Now</Box>
                    <IconButton onClick={handleNextQuestion}>
                      <ChevronRightIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Grid sx={{ my: 2 }} container spacing={2}>
                  <Grid item xs={12}>
                    <QuestionBanks
                    id={filterIds}
                      questions={filteredQues}
                      options={filteredOptions}
                      solutions={filteredSolutions}
                      explanations={filteredExplanations}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item md={2} xs={12}>
              <Typography variant="h6">List from this author</Typography>
              <List>
                {questions.map((question:any, index:any) => (
                  <ListItem key={index}>
                    <Box
                      sx={{
                        width: "100%",
                        height: 50,
                        border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {question.id}
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

export default DashboardContributersQuestio1;
