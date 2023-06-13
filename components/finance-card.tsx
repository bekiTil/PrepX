import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';


const CourseInfo = () => {
  return (
    <Card sx={{m:2, }}>
        <CardContent>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          Atomic Structure
        </Typography>
       
      </Grid>
      <Grid item xs={3}>
      <Typography variant="body2" style={{ color: '#888888' }}>
          Math
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2">50 ETB</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2">March 23</Typography>
      </Grid>
    </Grid>
    </CardContent>
  </Card>
  );
};

export default CourseInfo;
