import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export const EmployeesTable = ({ rows, title }) => {

  return (
    <TableContainer component={Paper} className="employees-table">
      <Typography variant="h2">{title}</Typography>
      <Table aria-label="sticky table">
        <TableHead>
          <TableRow hover role="checkbox">
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              hover={true}
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <p>{row.fullname}</p>
                {/* <p>{row.phone}</p> */}
              </TableCell>
              <TableCell>
                {/* <p>{row.phone}</p> */}
                <p>{row.phone}</p>
              </TableCell>
              <TableCell>
                {new Date(row.createdAt).toLocaleDateString("en-Gb", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </TableCell>
              <TableCell>
                {new Date(row.createdAt).toLocaleTimeString("en-Gb")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
