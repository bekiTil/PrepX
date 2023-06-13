import {
  Box,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
  Button,
  Toolbar,
} from "@mui/material";
import Navbar from "../components/header";

const LoginPage: React.FC = () => {
  const styles = {
    input: {
      backgroundColor: "#f1f1f1", // Replace with desired gray color
    },
    boxContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Toolbar></Toolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          backgroundColor: "black",
          padding: 2,
          typography: "body1",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Card sx={{ width: 400, backgroundColor: "white", padding: 2 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              color="textPrimary"
              variant="h4"
              style={{ textAlign: "center" }}
            >
              Contributor Log In
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Enter your details to get signed in to your account and get going.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Enter your Email"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Password"
                type="password"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2, textAlign: "left" }}>
              <Link
                variant="body2"
                href="#"
                color="inherit"
                sx={{
                  textDecoration: "none", // Remove the underline
                  color: "#6750A4",
                }}
              >
                Forgot password?
              </Link>
            </Box>

            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  paddingX: 4,
                  borderRadius: "20px",
                  bgcolor: "black",
                  color: "white",
                }}
              >
                Login
              </Button>
            </Box>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2">
                Don’t have an account?{" "}
                <Link
                  variant="body2"
                  href="/register"
                  sx={{
                    textDecoration: "none", // Remove the underline
                    color: "#6750A4",
                  }}
                  color="inherit"
                >
                  Register
                </Link>
              </Typography>
            </Box>
          </CardContent>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="caption">
              Copyright at <b>Temaribet Inc.</b>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default LoginPage;
