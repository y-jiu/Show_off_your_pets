import * as React from 'react';
import MenuBar from "../components/MenuBar";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@material-ui/core'

const columns = [
  { id: 'id', label: 'ID', width: 70 },
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'username', label: 'Username', minWidth: 100 }
];

function createData(id, title, username) {
  return { id, title, username };
}

const rows = [
  {id: 1, title: 'title1', username: 'user1' },
  {id: 2, title: 'title2', username: 'user2' },
  {id: 3, title: 'title3', username: 'user3' }
];

const theme = createTheme({
  palette: {
    mode: "dark",
  }
});

const Fostering = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
       
      <MenuBar>
      </MenuBar>
      <div style = {{width: "50%", margin: "auto", marginTop: "50px"}}>
      <ThemeProvider theme={theme}>
        <Paper sx={{ width: '100%', overflow: 'hidden'}}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </ThemeProvider>
      </div>
      
    </div>
  );
}
export default Fostering;