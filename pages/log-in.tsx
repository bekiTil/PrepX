import {
  Box,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
  Button,
  Toolbar,
  Alert,
} from "@mui/material";
import Navbar from "../components/header";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {signin} from "../backend-utils/user-utils";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";



const LoginPage: React.FC = () => {
  const router = useRouter();
  const styles = {
    input: {
      backgroundColor: "#f1f1f1", 
    },
    boxContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  };
  const dispatch = useDispatch();
  const [loggingIn, setLoggingIn] = useState(false);
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [err, setErr] = useState("");
  const loginRequest= ()=>{
    setLoggingIn(true)
    signin(email,password)
    .then((res) => res.json())
        .then((data) => {
          console.log(data.status)
          if (data.success) {
            dispatch(
              login({
                user: data.user,
                accessToken: data.access_token,
                refreshToken: data.refresh_token,
                loggedIn: true,
              })
            );
            router.push("/dashboard-home");
          } else {
            if (data.status != 500)
            {
            setErr(data.message)
            }
            else{
            setErr('Something went wrong')
            }
          }
        })
        .catch((_err) => {
          setErr("Something went wrong");
        })
        .finally(() => {
          if (isMounted.current) {
            // ? preserve memory leak
            // ? state is updated only if mounted
            setLoggingIn(false);
          }
        });
  }


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
  label="Password"
  type="password"
  fullWidth
  value={password}
  error={!isPasswordValid}
 helperText={!isPasswordValid ? "Password is Required" : ""}
  onChange={(e) => {
    setPassword(e.target.value);
    setIsPasswordValid(e.target.value !== "");
  }}
/>
            
            </Box>

            <Box sx={{ mt: 2, textAlign: "left" }}>
              <Link
                variant="body2"
                href="#"
                color="inherit"
                onClick={()=>router.push("forgot-password")}
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
                onClick={loginRequest}
                variant="contained"
                sx={{
                  paddingX: 4,
                  borderRadius: "20px",
                  bgcolor: "black",
                  color: "white",
                }}
                disabled={!isEmailValid || !isPasswordValid || loggingIn}
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
                  onClick={()=> router.push("register")}
                >
                  Register
                </Link>
              </Typography>
            </Box>
            {err !== "" && <Alert severity="error">{err}</Alert>}
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
