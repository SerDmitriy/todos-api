import React, { useEffect, useState } from 'react';
import { Fab, Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import { ConfirmModal } from 'shared/modals/confirm-modal/confirm-modal';
import { PositionModal } from 'modules/main/settings/positions/position-modal/position-modal';
import TableHead from '@material-ui/core/TableHead';
import { usePositionStyles } from 'modules/main/settings/positions/use-positions.styles';
import { PositionRow } from 'modules/main/settings/positions/row/position-row';
import { deletePositionThunk, getPositionListThunk } from 'store/settings-positions/positions.thunk';
import { useDispatch } from 'react-redux';
import { useRootSelector } from 'store/index.reducer';
import { IPosition } from 'models/positions/positions.model';
import { InitId } from 'constants/types-and-validation/init-id';

export const Positions: React.FC = () => {
  const dispatch = useDispatch();
  const classes = usePositionStyles();
  const [isOpenPositionModal, setIsOpenPositionModal] = useState<boolean>(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const initialPosition = {
    id: InitId,
    name: '',
    types: [],
  };
  const [currentPosition, setCurrentPosition] = useState<IPosition>(initialPosition);
  const { positionsState } = useRootSelector();

  useEffect(() => {
    if (positionsState.data === null && !positionsState.isLoading) {
      dispatch(getPositionListThunk());
    }
  }, [dispatch, positionsState]);

  const addPositionHandler = () => {
    setCurrentPosition(initialPosition);
    setIsOpenAddModal(true);
  };

  const handleEdit = (position: IPosition) => {
    setCurrentPosition(position);
    setIsOpenAddModal(true);
  };

  const handleDelete = (id: number) => {
    setCurrentPosition({ ...initialPosition, id });
    setIsOpenDeleteModal(true);
  };

  return (
    <div>
      <Paper>
        <div className={classes.headerWrapper}>
          <div className={classes.header}>
            <Fab className={classes.createNewBtn} aria-label="add" onClick={addPositionHandler}>
              <AddIcon style={{ fontSize: '18px' }} />
            </Fab>
            <p className={classes.addText}>Add Position</p>
          </div>
        </div>
      </Paper>
      <Paper className={classes.tablePaper}>
        <Table aria-label="collapsible table" size={'medium'}>
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell className={classNames(classes.headerCell, classes.smallCell)}>Positions</TableCell>
              <TableCell className={classes.headerCell}>Types</TableCell>
              <TableCell className={classNames(classes.headerCell, classes.smallCell)}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positionsState.data
              ? positionsState.data.map((position, index) => (
                  <PositionRow
                    key={position.name + index}
                    position={position}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                ))
              : null}
          </TableBody>
        </Table>
      </Paper>
      <PositionModal
        currentPosition={currentPosition}
        setCurrentPosition={setCurrentPosition}
        isOpen={isOpenPositionModal}
        handleClose={() => setIsOpenPositionModal(false)}
      />
      <ConfirmModal
        open={isOpenAddModal}
        mainLabel={'Are you sure?'}
        secondaryLabel={
          currentPosition.id === 0
            ? 'Adding a new Position can affect already existing Employees.'
            : 'Editing Position can affect already existing Employees.'
        }
        onClose={() => setIsOpenAddModal(false)}
        onSubmit={() => {
          setIsOpenAddModal(false);
          setIsOpenPositionModal(true);
        }}
      />
      <ConfirmModal
        open={isOpenDeleteModal}
        mainLabel={'Are you sure?'}
        secondaryLabel={'Deleting Position can affect already existing Employees.'}
        onClose={() => setIsOpenDeleteModal(false)}
        onSubmit={() => {
          dispatch(deletePositionThunk(currentPosition.id));
          setIsOpenDeleteModal(false);
        }}
      />
    </div>
  );
};
