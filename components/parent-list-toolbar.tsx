import { Search } from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    Typography,
  } from "@mui/material";

  import { useRouter } from "next/router";
  
  export const ParentListToolbar = (props:any) => {
  
    return (
      <Box sx={{
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "column",
      }}  {...props}>
        
       <Box>
            
                <TextField
                  onChange={(event) => props.setSearchTerm(event.target.value)}
                  fullWidth
                 
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon color="action" fontSize="small">
                          <Search/>
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search By name, state and country"
                  variant="outlined"
                 
                />
             
        
             </Box>
      </Box>
    );
  };
  