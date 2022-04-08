import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React from 'react';

const rows = [
    {
        user: 'bfostdev',
        email: 'bfost@dev.com'
    },
    {
        user: 'asdf',
        email: 'asdf@dev.com'
    },
    {
        user: 'bfostdev',
        email: 'bfost@dev.com'
    },
    {
        user: 'asdf',
        email: 'asdf@dev.com'
    },
    {
        user: 'bfostdev',
        email: 'bfost@dev.com'
    },
    {
        user: 'asdf',
        email: 'asdf@dev.com'
    },
    {
        user: 'bfostdev',
        email: 'bfost@dev.com'
    },
    {
        user: 'asdf',
        email: 'asdf@dev.com'
    },
];

function UserEmailTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell align="right">Email</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, idx) => (
                    <TableRow
                    key={idx}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.user}
                        </TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// fws draft list page, email list page
function AccordionTables() {
    return (
        <>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="emptydrafts-content"
                id="emptydrafts-header"
            >
                <Typography variant="h5">{rows.length} Empty Drafts</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <UserEmailTable />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="emptydrafts-content"
                id="emptydrafts-header"
            >
                <Typography variant="h5">{rows.length} Incomplete Drafts</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <UserEmailTable />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="emptydrafts-content"
                id="emptydrafts-header"
            >
                <Typography variant="h5">{rows.length} Not Entered</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <UserEmailTable />
            </AccordionDetails>
        </Accordion>
</>
    );
}

export default AccordionTables;