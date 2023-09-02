import React, { useState } from 'react';

import DashboardLayouts from '../components/new-layo';
import { Box, Container } from '@mui/material';
import Home from './home';
import { ParentListToolbar } from '../components/parent-list-toolbar';
import {ContributorsListResults} from '../components/contributors-list-results';


const DashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const parents = [
    {
      fullName: "John Doe",
      Area: "Some Area",
      Quantities: "5",
      state: "pending",
    },
    {
      fullName: "Jane Smith",
      Area: "Another Area",
      Quantities: "10",
      state: "delivered",
    },
    {
      fullName: "Alice Johnson",
      Area: "City Center",
      Quantities: "3",
      state: "cancelled",
    },
    {
      fullName: "Bob Williams",
      Area: "Suburbia",
      Quantities: "8",
      state: "pending",
    },
    {
      fullName: "Eve Anderson",
      Area: "Downtown",
      Quantities: "2",
      state: "delivered",
    },
    {
      fullName: "Michael Brown",
      Area: "Industrial Zone",
      Quantities: "6",
      state: "cancelled",
    },
    {
      fullName: "Sarah Davis",
      Area: "Residential Area",
      Quantities: "4",
      state: "pending",
    },
    {
      fullName: "Alex Wilson",
      Area: "Coastal Region",
      Quantities: "7",
      state: "delivered",
    },
    {
      fullName: "Olivia Taylor",
      Area: "Mountain Village",
      Quantities: "1",
      state: "pending",
    },
    {
      fullName: "David Thompson",
      Area: "Rural Countryside",
      Quantities: "9",
      state: "delivered",
    },
  ];
  return (
    <DashboardLayouts>
      
     <Box
        component="main"
        sx={{
          flexGrow: 1,
          
        }}
      >
         
          <ParentListToolbar
            name="Questions"
            setSearchTerm={setSearchTerm}
            route="/parents/create-parent"
          />
        
        <Container maxWidth={false}>
         
          <Box sx={{ mt: 3 }}>
            <ContributorsListResults customers={parents} searchTerm={searchTerm} />
          </Box>
        </Container>
      </Box>
     
      </DashboardLayouts>
    
  );
};

export default DashboardPage;
