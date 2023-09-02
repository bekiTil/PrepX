import { Box, Card, CardContent, Link, TextField, Typography, Button, Toolbar, Alert } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Navbar from "../components/header";
import { useEffect, useState } from "react";
import { register } from "../backend-utils/user-utils";
import { useRouter } from "next/router";


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
 
  const [passportFileName, setPassportFileName] = useState<string | null>(null);
  const [photoFileName, setPhotoFileName] = useState<string | null>(null);
  const [cvFileName, setCVFileName] = useState<string | null>(null);
  const router = useRouter();
  
  const [firstName, setFirstName] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [field, setField] = useState("");
  const [college, setCollege] = useState("");
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [cvFile, setCVFile] = useState<File | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [err, setErr] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    const isFirstNameValid = firstName !== "";
    const isLastNameValid = lastName !== "";
    const isEmailFieldValid = email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Add similar checks for other fields if needed
  
    setIsFormValid(isFirstNameValid && isLastNameValid && isEmailFieldValid && phoneNumber!= null && field!= null && college != null && cgpa != null && status != null && cvFile != null && photoFile != null && passportFile != null );
  }, [firstName, lastName, email, phoneNumber,status,college,field,cgpa,status,photoFile,cvFile,passportFile]);

  const handleRegister = () => {

      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        status,
        cgpa,
        field,
        college,
        passportFile,
        cvFile,
        photoFile
      };
      setLoggingIn(true)
      register(userData).
      then((res)=>res.json()).
      then((data)=>{
        setLoggingIn(false)
        if (data.success){
          router.push("/log-in");
        }
        else{
          setErr(data.message)
console.log("Something_wrong")
        }
        
      })
     
    
  

      // Handle successful registration here
      
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
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Last Name"
                fullWidth
                value={lastName}
                onChange ={(e)=>setLastName(e.target.value)}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Email"
                fullWidth
                value={email}
  error={!isEmailValid}
 helperText={!isEmailValid ? "Email is Required" : ""}
  onChange={(e) => {
    
    setEmail(e.target.value);
    setIsEmailValid(e.target.value !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));

  }}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Phone Number"
                fullWidth
                value ={phoneNumber}
                onChange={(e)=>{setPhoneNumber(e.target.value)}}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Status"
                fullWidth
                value ={status}
                onChange={(e)=>{setStatus(e.target.value)}}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="CGPA"
                fullWidth
                value ={cgpa}
                onChange={(e)=> {setCGPA(e.target.value)}}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="Field"
                fullWidth
                value ={field}
                onChange ={(e)=> {setField(e.target.value)}}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <TextField
                InputProps={{ style: styles.input }}
                label="College"
                fullWidth
                value ={college}
                onChange={(e)=> setCollege(e.target.value)}
              />
            </Box>

            
            <Box sx={{ mt: 2 }}>
              <label htmlFor="passport-file-upload">
                <input
                  type="file"
                  id="passport-file-upload"
                  style={{ display: "none" }}
                  onChange={(e) => { 
                    setPassportFile(e.target.files ? e.target.files[0] : null)
                    setPassportFileName(e.target.files ? e.target.files[0].name : null)
                  }}
                />
                <Button
                 variant="outlined"
                 fullWidth
                 color = "secondary"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
               {passportFileName || "Passport/ID"}
                </Button>
              </label>
            </Box>

            <Box sx={{ mt: 2 }}>
              <label htmlFor="passport-photo-upload">
                <input
                  type="file"
                  id="passport-photo-upload"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    
                    
                    setPhotoFile(e.target.files ? e.target.files[0] : null)
                    setPhotoFileName(e.target.files ? e.target.files[0].name : null) 
                  
                  }}
                />
                <Button
                 variant="outlined"
                 fullWidth
                 color = "secondary"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
                 {photoFileName  ||  "Upload Passport Size Photo"}
                </Button>
              </label>
            </Box>

            <Box sx={{ mt: 2 }}>
              <label htmlFor="cv-upload">
                <input
                  type="file"
                  id="cv-upload"
                  style={{ display: "none" }}
                  onChange={(e) =>{ 
                    
                    setCVFile(e.target.files ? e.target.files[0] : null)
                    setCVFileName(e.target.files ? e.target.files[0].name : null);
                  }}
                />
                <Button
                  variant="outlined"
                  component="span"
                  color = "secondary"
                  fullWidth
                  startIcon={<CloudUploadIcon />}
                >
                  { cvFileName || "Upload CV"}
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
                onClick={handleRegister}
                disabled={!isFormValid || loggingIn} 
              >
                Register
              </Button>
            </Box>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link
                  variant="body2"
                  href="/log-in"
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
            {err !== "" && <Alert severity="error">{err}</Alert>}
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
