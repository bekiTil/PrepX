import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
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
import CourseInfo from "../components/finance-card";

const Finance: NextPage = () => {
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
            {[1, 2, 3].map((val) => (
              <Grid item xs={12}>
                <CourseInfo />
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
            {[1, 2, 3].map((val) => (
              <Grid item xs={12}>
                <CourseInfo />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Finance;
