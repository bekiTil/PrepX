import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Paper, Button, Box } from '@mui/material';

interface QuestionBankProps {
  question: string;
  options: string[];
  correctAnswer: string;
}

const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  minWidth: 400,
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const QuestionBank: React.FC<QuestionBankProps> = ({
  question,
  options,
  correctAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    // Logic for moving to the next question or submitting the answers
    // You can update the question and choices here
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h6" gutterBottom>
        Question 1:
      </Typography>
      <Typography variant="body1" gutterBottom>
        {question}
      </Typography>
      <Box paddingLeft={3}>
        {options.map((option, index) => (
          <div key={index}>
            <Typography variant="body1" gutterBottom>
              {`${String.fromCharCode(65 + index)}.`} {option}
            </Typography>
          </div>
        ))}
        <Typography variant="h6" gutterBottom>
          Ans. {correctAnswer}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default QuestionBank;
