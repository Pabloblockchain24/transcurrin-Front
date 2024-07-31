/*import styles*/
import "./Table.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, IconButton, TablePagination, Popper, ClickAwayListener, MenuItem, MenuList, Grow, Badge } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

/*import components */
import React, { useState, useRef } from "react";

/*import utils*/
import { formatFecha } from "../../utils/formatFechas";
import { demurrage, diasEnPuerto, diasEnDepot, formatHoraEntrega, horaEntregaEstimada } from "../../utils/calculationsTransito";

/*import icons*/
import { FaFilter } from "react-icons/fa";

export const IntranetTable = ({ servicios, columns }) => {

    const columnsAux = columns.map((servicio) => servicio.id);

    function createData(...args) {
        const data = {};
        columnsAux.forEach((key, index) => {
            data[key] = args[index];
        });
        return data;
    }

    const rows = servicios.map((service, index) => {
        const args = columnsAux.map((column) => {
            if (column === 'Eta') {
                return formatFecha(service.eta);
            }
            if (column === 'Demurrage') {
                return demurrage(service.eta, service.diasLibres);
            }
            if (column === 'DiasEnPuerto') {
                return diasEnPuerto(service.eta);
            }
            if (column === 'diasEnDepot') {
                return diasEnDepot(service.retiroPuerto);
            }
            if (column === 'almDestino') {
                if (!service.almDestino) {
                    return "PENDIENTE"
                }
                return service.almDestino
            }
            if (column === 'entrega') {
                return formatFecha(service.entrega)
            }
            if (column === 'fechaVacio') {
                return formatFecha(service.fechaVacio)
            }
            if (column === 'DepotDevolucion') {
                return service.depotDevolucion
            }
            if (column === 'retiroPuerto') {
                return formatFecha(service.retiroPuerto)
            }
            if (column === 'progEntrega') {
                return formatFecha(service.progEntrega)
            }
            if (column === 'choferEntrega') {
                if (service.choferEntrega) return service.choferEntrega
                return "PENDIENTE"
            }
            if (column === 'carguioEntrega') {
                return formatHoraEntrega(service.carguioEntrega)
            }
            if (column === 'estimadaEntrega') {
                return horaEntregaEstimada(service.carguioEntrega)
            }
            if (column === 'statusEntrega') {

                if (service.entrega === null) {
                    if (service.carguioEntrega !== null) {
                        return "EN RUTA"
                    }
                    return "PENDIENTE"
                }
                return "ENTREGADO" 
            }
            return service[column.toLowerCase()];
        });
        return createData(...args);
    });

    const initialFilterValues = columnsAux.reduce((acc, column) => {
        acc[column] = '';
        return acc;
    }, {});

    const [filterValues, setFilterValues] = useState(initialFilterValues);

    const uniqueValues = (column) => {
        return [...new Set(rows.map((row) => row[column]))];
    };

    const [openFilter, setOpenFilter] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [filterColumn, setFilterColumn] = useState('');
    const popperRef = useRef(null);

    const handleFilterClick = (event, column) => {
        setAnchorEl(event.currentTarget);
        setOpenFilter((prev) => !prev);
        setFilterColumn(column);
    };

    const handleClose = () => {
        setOpenFilter(false);
        setAnchorEl(null);
    };

    const handleColumnFilterChange = (value, column) => {
        let newFilterValues = { ...filterValues };
        if (value === 'Todos') {
            newFilterValues = { ...filterValues, [column]: '' };
        } else {
            newFilterValues = { ...filterValues, [column]: value };
        }
        setFilterValues(newFilterValues);
        handleClose();
    };

    const filterData = () => {
        let filteredData = [...rows];

        Object.keys(filterValues).forEach((key) => {
            if (filterValues[key]) {
                filteredData = filteredData.filter((row) =>
                    row[key].toLowerCase().includes(filterValues[key].toLowerCase())
                );
            }
        });
        return filteredData;
    };

    const filteredData = filterData();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const slicedRows = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper} className='tableContainer'>
            <Table sx={{ minWidth: 650, '& td, & th': { padding: '0.5rem', textAlign: 'center' } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell className='tableCellColumn' key={column.id}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>
                                        {column.label}
                                        {filterValues[column.id] && (
                                            <Badge badgeContent={<FaFilter />} style={{ padding: '0.5rem' }} />
                                        )}
                                    </span>
                                    <IconButton
                                        ref={popperRef}
                                        onClick={(e) => handleFilterClick(e, column.id)}
                                        aria-haspopup='true'
                                        aria-controls={openFilter ? 'filter-menu' : undefined}
                                    >
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                    <Popper
                                        open={openFilter && filterColumn === column.id}
                                        anchorEl={anchorEl}
                                        role={undefined}
                                        transition
                                        disablePortal
                                        style={{ zIndex: 1 }}
                                        placement="bottom-start"
                                    >
                                        {({ TransitionProps }) => (
                                            <Grow {...TransitionProps}>
                                                <Paper>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList autoFocusItem={openFilter}>
                                                            <MenuItem key='todos' onClick={() => handleColumnFilterChange('Todos', column.id)}>
                                                                Todos
                                                            </MenuItem>
                                                            {uniqueValues(column.id).map((option) => (
                                                                <MenuItem
                                                                    key={option}
                                                                    selected={filterValues[column.id] === option}
                                                                    onClick={() => handleColumnFilterChange(option, column.id)}
                                                                    style={{
                                                                        backgroundColor: filterValues[column.id] === option ? '#d3d3d3' : 'transparent'
                                                                    }}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </div>
                            </TableCell>
                        ))}
                    </TableRow>

                </TableHead>
                <TableBody>
                    {slicedRows.map((row, index) => (
                        <TableRow key={index}>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    {row[column.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={7} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TableFooter >
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage='Filas por página'
                />
            </TableFooter>
        </TableContainer>
    )
}

export default IntranetTable