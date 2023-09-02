import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import NavbarAuth from "../components/headern";
import {
  Box,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import CourseInfo, { CourseInfoData } from "../components/finance-card";

const Finance: NextPage = () => {
  const financeData: CourseInfoData[] = [
    {
      title: "Atomic Structure",
      subject: "Math",
      price: "50 ETB",
      date: "March 23",
    },
    {
      title: "Chemical Reactions",
      subject: "Chemistry",
      price: "60 ETB",
      date: "April 5",
    },
    {
      title: "Introduction to Algebra",
      subject: "Math",
      price: "45 ETB",
      date: "February 15",
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
          <Typography>Recent</Typography>

          <Grid container spacing={2} justifyContent="center">
          {financeData.map((data, index) => (
          <Grid item xs={12} key={index}>
            <CourseInfo data={data} />
          </Grid>
        ))}
          </Grid>
          <Divider
            sx={{
              borderBottomWidth: "2px",
              my: 2,
              borderColor: "rgba(0, 0, 0, 0.87)",
            }}
          />
          <Typography>last Week</Typography>
          <Grid container spacing={2} justifyContent="center">
          {financeData.map((data, index) => (
          <Grid item xs={12} key={index}>
            <CourseInfo data={data} />
          </Grid>
        ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Finance;
