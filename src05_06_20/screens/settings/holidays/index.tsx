import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteHolidayThunk, getHolidayListThunk } from 'store/holiday/holiday.thunk';
import { useRootSelector } from 'store/index.reducer';
import { Fab, Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { SharedSortableTableHead } from 'shared/sortable-table-header/sortable-table-header';
import { useHolidayStyles } from 'modules/main/settings/holidays/use-holiday.styles';
import AddIcon from '@material-ui/icons/Add';
import { TOrder } from 'models/order.type';
import classNames from 'classnames';
import { IHoliday } from 'models/holiday/holiday.model';
import { HolidayModal } from 'shared/modals/holiday-modal/holiday-modal';
import { GenerateIcon } from 'helpers/generate-icons/generate-holiday-icon';
import { getRepeatingDate } from 'helpers/calculate-date/repeating-date';
import { ConfirmModal } from 'shared/modals/confirm-modal/confirm-modal';

export const Holidays: React.FC = () => {
  const classes = useHolidayStyles();
  const { holidayState } = useRootSelector();
  const dispatch = useDispatch();
  const initialHoliday = { id: 0, name: '', date: new Date().toISOString(), repeating: false };
  const [currentHoliday, setCurrentHoliday] = useState<IHoliday>(initialHoliday);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [order, setOrder] = useState<TOrder>('desc');
  const [orderBy, setOrderBy] = useState<string>('date');
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [holidayId, setHolidayId] = useState<number>(0);

  useEffect(() => {
    if (holidayState.data === null && !holidayState.isLoading) {
      dispatch(getHolidayListThunk(`${orderBy},${order}`));
    }
  }, [dispatch, holidayState, orderBy, order]);

  const editHandler = (item: IHoliday) => {
    setCurrentHoliday(item);
    setIsOpenModal(true);
  };

  const handleRequestSort = (property: string) => {
    const isDesc = orderBy === property && order === 'desc';
    const checkedOrder = isDesc ? 'asc' : 'desc';
    dispatch(getHolidayListThunk(`${property},${checkedOrder}`));
    setOrder(checkedOrder);
    setOrderBy(property);
  };

  const handleDelete = (id: number): void => {
    setIsOpenDeleteModal(true);
    setHolidayId(id);
  };

  return (
    <div>
      <Paper>
        <div className={classes.headerWrapper}>
          <div className={classes.createHoliday}>
            <Fab className={classes.createNewBtn} aria-label="add" onClick={() => setIsOpenAddModal(true)}>
              <AddIcon style={{ fontSize: '18px' }} />
            </Fab>
            <p className={classes.addHolidayText}>Add Holiday</p>
          </div>
        </div>
      </Paper>
      <Paper className={classes.tablePaper}>
        <Table aria-labelledby="tableTitle" size={'medium'} aria-label="enhanced table">
          <SharedSortableTableHead
            order={order}
            orderBy={orderBy}
            handleRequestSort={handleRequestSort}
            headCellProps={[
              { status: 'name', numeric: false, disablePadding: false, label: 'Name' },
              { status: 'date', numeric: false, disablePadding: false, label: 'Date' },
              { status: 'repeating', numeric: false, disablePadding: false, label: 'Recurring' },
              { status: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
            ]}
            disabledFiledList={['actions']}
          />
          <TableBody>
            {holidayState.data &&
              holidayState.data.map((item, index) => {
                return (
                  <TableRow className={classes.tableRow} key={index + 'holiday'} hover>
                    <TableCell className={classes.paddingLarge}>{item.name}</TableCell>
                    <TableCell size="small" align="left" className={classNames(classes.truncate, classes.paddingLarge)}>
                      {getRepeatingDate(item.date, item.repeating)}
                    </TableCell>
                    <TableCell size="small" align="left" className={classes.margin}>
                      <GenerateIcon repeating={item.repeating} />
                    </TableCell>
                    <TableCell size="small" align="left" className={classes.paddingLarge}>
                      <button
                        className={classNames(classes.baseBtn, classes.invertBtn)}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                      <button className={classes.baseBtn} onClick={() => editHandler(item)}>
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Paper>
      <HolidayModal
        {...currentHoliday}
        isOpen={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
        setCurrentHoliday={setCurrentHoliday}
      />
      <ConfirmModal
        open={isOpenAddModal}
        mainLabel={'Are you sure?'}
        secondaryLabel={'Adding a Custom Holiday can affect already existing Requests from Employees.'}
        onClose={() => setIsOpenAddModal(false)}
        onSubmit={() => {
          setIsOpenAddModal(false);
          editHandler(initialHoliday);
        }}
      />
      <ConfirmModal
        open={isOpenDeleteModal}
        mainLabel={'Are you sure?'}
        secondaryLabel={'Deleting a Custom Holiday can affect already existing Requests from Employees.'}
        onClose={() => setIsOpenDeleteModal(false)}
        onSubmit={() => {
          setIsOpenDeleteModal(false);
          dispatch(deleteHolidayThunk(holidayId));
        }}
      />
    </div>
  );
};
