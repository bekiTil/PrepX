import { Box, Card, CardContent, Link, TextField, Typography, Button, Toolbar } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Navbar from "../components/header";

const RegistrationPage: React.FC = () => {
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
              variant="h5"
              style={{ textAlign: "center" }}
            >
              Contributor Registration
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Enter your details to get signed in to your account and get going.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="First Name"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Last Name"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Email"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Phone Number"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Status"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="CGPA"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Field"
                fullWidth
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="College"
                fullWidth
              />
            </Box>

            
            <Box sx={{ mt: 2 }}>
              <label htmlFor="passport-photo-upload">
                <input
                  type="file"
                  id="passport-photo-upload"
                  style={{ display: "none" }}
                />
                <Button
                 variant="outlined"
                 fullWidth
                 color = "secondary"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
               Passport/ID
                </Button>
              </label>
            </Box>

            <Box sx={{ mt: 2 }}>
              <label htmlFor="passport-photo-upload">
                <input
                  type="file"
                  id="passport-photo-upload"
                  style={{ display: "none" }}
                />
                <Button
                 variant="outlined"
                 fullWidth
                 color = "secondary"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Passport Size Photo
                </Button>
              </label>
            </Box>

            <Box sx={{ mt: 2 }}>
              <label htmlFor="cv-upload">
                <input
                  type="file"
                  id="cv-upload"
                  style={{ display: "none" }}
                />
                <Button
                  variant="outlined"
                  component="span"
                  color = "secondary"
                  fullWidth
                  startIcon={<CloudUploadIcon />}
                >
                  Upload CV
                </Button>
              </label>
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
                Register
              </Button>
            </Box>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link
                  variant="body2"
                  href="/login"
                  sx={{
                    textDecoration: "none",
                    color: "#6750A4",
                  }}
                  color="inherit"
                >
                  Login
                </Link>
              </Typography>
            </Box>
          </CardContent>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="caption">
              © {new Date().getFullYear()} Temaribet Inc.
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
