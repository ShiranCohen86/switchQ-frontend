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
  const timeDifference = (date1, date2) => {
    let difference = date1 - date2;

    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;

    let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    let minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    let secondsDifference = Math.floor(difference / 1000);

    return `${daysDifference} days - ${hoursDifference} hour/s - ${minutesDifference} minute/s - ${secondsDifference} second/s`;
  };

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
                {timeDifference(row.endDate, row.startDate)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
