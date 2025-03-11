import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import ModalBox from './ModalBox';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Button,ButtonGroup } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { TableContext } from '../hooks/TableContext';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}



function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort,headCells,name } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) =>(
          
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
             align='left'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className='header'
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {
          name === 'Class Bookings' && (
            <TableCell align='center'>
              Action
            </TableCell>
          )
        }
        {
          name === 'Sale Plan' && (
            <TableCell align='center'>
              Action
            </TableCell>
          )
        }
      </TableRow>
    </TableHead>
  );
}

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

function EnhancedTableToolbar(props) {
  const { numSelected,name,handleOpen,allData,filterClick } = props;

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {name}
        </Typography>
      )}
      {numSelected > 0? (
        <>
          {
            name !== 'Class Bookings' && name !== 'Report' && name !== 'Sale Plan' && name !== 'Income' && name !== 'Member List' ? (
              <>
                {
                    numSelected === allData ? (
                      <>
                          <Tooltip title="File Download">
                            <Fab color="primary" aria-label="File Download" size='small'>
                              <FileDownloadIcon />
                            </Fab>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <Fab color="error" aria-label="Delete" size='small'>
                              <DeleteIcon />
                            </Fab>
                          </Tooltip>
                      </>
                    ): (
                      <>
                         {
                          numSelected > 1 ? (
                            <>
                              <Tooltip title="Delete">
                                <Fab color="error" aria-label="Delete" size='small'>
                                  <DeleteIcon />
                                </Fab>
                              </Tooltip>
                            </>
                          ) : (
                            <>
                              <Tooltip title="Edit">
                                <Fab color="primary" aria-label="Edit" size='small'>
                                  <EditIcon />
                                </Fab>
                              </Tooltip>
                              <Tooltip title="Delete">
                                <Fab color="error" aria-label="Delete" size='small'>
                                  <DeleteIcon />
                                </Fab>
                              </Tooltip>
                            </>
                          )
                         }
                      </>
                    )
                }
              </>
            ):(
              <>
                  {
                    numSelected > 1 ? (
                      <>
                         <Tooltip title="File Download">
                            <Fab color="primary" aria-label="File Download" size='small'>
                              <FileDownloadIcon />
                            </Fab>
                          </Tooltip>
                      </>
                    ): (
                      <>
                         <Tooltip title="View">
                            <Fab color="primary" aria-label="View" size='small'>
                              <VisibilityIcon />
                            </Fab>
                          </Tooltip>
                      </>
                    )
                  }
              </>
            )
          }
        </>
      ) : (
        <>
          {
            name !== 'Report' && name !== 'Income' && name !== 'Member List' ? (
              <>
                <Tooltip title="Create">
                  <Fab color="primary" aria-label="Create" size='small'>
                    <AddIcon onClick={()=>handleOpen({name})}/>
                  </Fab>
                </Tooltip>
                <Tooltip title="Filter list">
                  <Fab color="primary" aria-label="Filter list" size='small'>
                    <FilterListIcon onClick={() => filterClick({name})}/>
                  </Fab>
                </Tooltip>
              </>
            ) : (
              <>
               <Tooltip title="Filter list">
                  <Fab color="primary" aria-label="Filter list" size='small'>
                    <FilterListIcon onClick={() => filterClick({name})}/>
                  </Fab>
                </Tooltip>
              </>
            )
          }
        </>
      )}
    </Toolbar>
  );
}

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

export default function DataTable({name,rows,headCells}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const {selectedName,open,filterOpen,filterName,show,handleApprove,handleOpen,handleClose,filterClick,filterClose} = React.useContext(TableContext)


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };




  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rows, rowsPerPage],
  );

  return (
    <Box sx={{width:'100%'}}>
      <Paper sx={{width:'100%', mb: 2}}>
        <EnhancedTableToolbar numSelected={selected.length} name={name} handleOpen={handleOpen} allData ={rows.length} filterClick={filterClick}/>
        <ModalBox  handleClose={handleClose} open={open} selectedName={selectedName} filterClose={filterClose} filterName={filterName} filterOpen={filterOpen}/>
        <TableContainer>
          <Table
          sx={{width:"100%"}}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
              name={name}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const data = Object.values(row)
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                    <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        onChange={(event) => handleClick(event, row.id)}
                      />
                    </TableCell>
                      {
                        data.map((dataName,index)=>{
                          return(
                            <>
                              <TableCell  component="th"
                              id={labelId}
                              key={index}
                              scope="row"
                              padding="none" align={dataName === null ? 'center':'left'} className='tableRow'>
                                {dataName || '-'}
                              </TableCell>
                            </>
                          )
                        })
                      }
                    {
                      name === 'Class Bookings' && (
                        <>
                          {
                            show ? (
                            <>
                              <TableCell align='center'>
                                <ButtonGroup variant="outlined" aria-label="Basic button group" size="small">
                                  <Button variant="contained" color="success" className='btn' size="small" onClick={()=> handleApprove(row.id)}>Approve</Button>
                                  <Button variant="contained" color="error" size="small" className='btn'>Reject</Button>
                                </ButtonGroup>
                              </TableCell>
                            </>
                            ):(
                              <>
                                <TableCell align='center'>
                                  -
                                </TableCell>
                              </>
                            )
                          }
                        </>
                      )
                    }
                     {
                      name === 'Sale Plan' && (
                        <>
                          {
                            show ? (
                            <>
                              <TableCell align='center'>
                                <ButtonGroup variant="outlined" aria-label="Basic button group" size="small">
                                  <Button variant="contained" color="success" className='btn' size="small" onClick={()=> handleApprove(row.id)}>Accept</Button>
                                  <Button variant="contained" color="error" size="small" className='btn'>Cancel</Button>
                                </ButtonGroup>
                              </TableCell>
                            </>
                            ):(
                              <>
                                <TableCell align='center'>
                                  -
                                </TableCell>
                              </>
                            )
                          }
                        </>
                      )
                    }
                     

                    </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25,50,100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}