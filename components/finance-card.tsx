import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export interface CourseInfoData {
  title: string;
  subject: string;
  price: string;
  date: string;
}

interface CourseInfoProps {
  data: CourseInfoData;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ data }) => {
  const { title, subject, price, date } = data;

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" style={{ color: "#888888" }}>
              {subject}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">{price}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">{date}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CourseInfo;
