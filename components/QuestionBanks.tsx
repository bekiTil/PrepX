import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Paper, Box, Divider, IconButton, Button, Grid } from '@mui/material';
import { Cancel, Edit } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface QuestionBanksProps {
  id:number[]
  questions: string[];
  options: string[][];
  solutions: string[];
  explanations: string[];
}

const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  minWidth: 400,
  
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  margin:10 // Display question, options, solutions, and explanations in a column
}));
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const QuestionBanks: React.FC<QuestionBanksProps> = ({
  id,
  questions,
  options,
  solutions,
  explanations,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  const StyledGridContainer = styled(Grid)(({ theme }) => ({
    borderRight: '1px solid #000', // Add a border to the right
  }));

  const handleNextClick = () => {
    // Logic for moving to the next question or submitting the answers
    // You can update the question and choices here
  };
  const router = useRouter()

  return (
    <div>
      {questions.map((question, index) => (
        <Box  display="flex" flexDirection="row"   key={index}>
          <StyledPaper>
          <Grid container  spacing={3}>
            <Grid item md={6}>
              <Typography variant="h6" gutterBottom>
                Question {index + 1}:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {question}
              </Typography>
            
              {options[index].map((option, optionIndex) => (
                <Typography variant="body1" gutterBottom key={optionIndex}>
                  {`${String.fromCharCode(65 + optionIndex)}.`} {option}
                </Typography>
              ))}
               <Typography variant="body1" gutterBottom>
               Ans. {solutions[index]}
              </Typography>
            </Grid>
            
            <Divider sx={{
              borderBottomWidth: "2px",
              my: 2,
              borderColor: "rgba(0, 0, 0, 0.87)",
            }} orientation="vertical" flexItem>
           
  </Divider>
            <Grid item md={5}>
              <Typography variant="h6" gutterBottom>
                Solution:
              </Typography>
             
              <Typography variant="body1" gutterBottom>
                {explanations[index]}
              </Typography>
            </Grid>
          </Grid>
          </StyledPaper>
          <Box width={100}>
            <div>
              <IconButton color="info" onClick={()=> router.push('/Questions/' + id[index])}>
                <Edit />
              </IconButton>
              <IconButton color="info">
                <Cancel />
              </IconButton>
            </div>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default QuestionBanks;
