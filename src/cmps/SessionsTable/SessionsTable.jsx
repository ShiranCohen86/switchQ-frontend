import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export const SessionsTable = ({ rows, title }) => {

  return (
    <TableContainer component={Paper} className="sessions-table">
      <Typography variant="h2">{title}</Typography>
      <Table aria-label="sticky table">
        <TableHead>
          <TableRow hover role="checkbox">
            <TableCell>Date Start</TableCell>
            <TableCell>Date End</TableCell>
            <TableCell>Total Hours</TableCell>
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
                {new Date(row.startDate).toLocaleDateString("en-Gb", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                {new Date(row.startDate).toLocaleTimeString("en-Gb")}
              </TableCell>
              <TableCell>
                {new Date(row.endDate).toLocaleDateString("en-Gb", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                {new Date(row.endDate).toLocaleTimeString("en-Gb")}
              </TableCell>
              <TableCell>
                {new Date(row.end - row.endDate).toLocaleDateString("en-Gb", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                {new Date(row.end - row.endDate).toLocaleTimeString("en-Gb")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
