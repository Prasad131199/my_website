import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable() {

    const [apiData, setApiData] = useState([]);
    useState(() => {
      fetch(`http://10.65.0.70:3000/apis/v1/candidates`)
        .then((response) => response.json())
        .then((json) => setApiData(json.data));
    }, []);
  



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="centre"></TableCell>
            <TableCell align="centre">FirstName</TableCell>
            <TableCell align="centre">LastName</TableCell>
            <TableCell align="centre">Primary Skills</TableCell>
            <TableCell align="centre">Secondary Skills</TableCell>
            <TableCell align="centre">Job ID</TableCell>
            <TableCell align="centre">Total Exeperience</TableCell>
            <TableCell align="centre">Relevant Experience</TableCell>
            <TableCell align="centre">Email ID</TableCell>
            <TableCell align="centre">Contact NO</TableCell>
            <TableCell align="centre">Employee ID</TableCell>
            <TableCell align="centre">Employee Name</TableCell>
            <TableCell align="centre">Employee Email ID</TableCell>
            <TableCell align="centre">Notice Period</TableCell>
            <TableCell align="centre">Resume</TableCell>
            <TableCell align="centre">Screening Status</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>

          {apiData.map((row) => (
            <TableRow key={row.id}>
                    
              <TableCell component="th" scope="row">
            
              </TableCell>
              <TableCell align="centre">{row.firstName}</TableCell>
              <TableCell align="centre">{row.lastName}</TableCell>
              <TableCell align="centre">{row.primarySkills}</TableCell>
              <TableCell align="centre">{row.secondarySkills}</TableCell>
              <TableCell align="centre">{row.jobId}</TableCell>
              <TableCell align="centre">{row.totalExperience}</TableCell>
              <TableCell align="centre">{row.relevantExperience}</TableCell>
              <TableCell align="centre">{row.emailId}</TableCell>
              <TableCell align="centre">{row.contactNo}</TableCell>
              <TableCell align="centre">{row.employeeId}</TableCell>
              <TableCell align="centre">{row.employeeName}</TableCell>
              <TableCell align="centre">{row.employeeEmailId}</TableCell>
              <TableCell align="centre">{row.noticePeriod}</TableCell>
              <TableCell align="centre">{row.resumeFileName}</TableCell>
              <TableCell align="centre">{row.screeningStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
