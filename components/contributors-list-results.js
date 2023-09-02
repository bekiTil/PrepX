import { useState } from "react";

import PropTypes from "prop-types";

import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme
} from "@mui/material";
import { useRouter } from "next/router";


import { DeleteOutlined, MoreHorizSharp } from "@mui/icons-material";
import { getInitials } from "../utils/getInitials";

export const ContributorsListResults = ({ customers, searchTerm, ...rest }) => {

  
  
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [err, setErr] = useState("");

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds= [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const theme = useTheme();

 
  

  return (
    <>
    <Box
    
    sx={{
      backgroundColor: theme.palette.primary.main,
      display: 'inline-block',
      borderRadius: '20%',
      p: 2,
      mb:4
    }}
  >
    <Typography variant="h6" sx={{ color: 'white' }}>
      Questions
    </Typography>
  </Box>
    <Card {...rest}>
      
      
        <Box 
       
        
        >
          <TableContainer>
          <Table
          
          >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Contributor Name</TableCell>
                <TableCell>Area</TableCell>
                <TableCell>Quantity</TableCell>
                
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
                .slice((limit*page), (limit)*(page+1))
                
                .map((customer) => (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                        onChange={(event) => handleSelectOne(event, customer.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                       
                        <Typography color="textPrimary" variant="body1">
                          {customer.fullName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{customer.Area}</TableCell>
                    <TableCell>{customer.Quantities}</TableCell>
                    <TableCell>

                    <span
                  style={{
                    color:
                      customer.state === 'cancelled'
                        ? 'red'
                        : customer.state === 'pending'
                        ? 'orange'
                        : customer.state === 'delivered'
                        ? 'green'
                        : 'inherit',
                  }}
                >
                  {customer.state}
                </span>
                    </TableCell>

                  </TableRow>
                ))}
            </TableBody>
          </Table>
          </TableContainer>
        </Box>
      
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
    </>
  );
};

ContributorsListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};
