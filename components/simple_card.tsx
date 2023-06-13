import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

interface QuestionBoxProps {
  number: number;
  title: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ number, title }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item xs={12} justifyContent="center">
              <Typography
                sx={{ textAlign: "center" }}
                color="textPrimary"
                variant="h4"
              >
                {number}
              </Typography>
            </Grid>
          </Grid>
          {/* <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pt: 2,
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1,
          }}
        >
          16%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box> */}
        </CardContent>
      </Card>
      <Typography color="textSecondary" gutterBottom variant="caption">
        {title}
      </Typography>
    </>
  );
};

export default QuestionBox;
