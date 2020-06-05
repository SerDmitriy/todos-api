import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { capitalize } from 'helpers/calculate-string/capitalize';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import edit from 'assets/images/landing/edit.svg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import classNames from 'classnames';
import { usePositionRowStyles } from 'modules/main/settings/positions/row/use-position-row.styles';
import { IPosition } from 'models/positions/positions.model';

interface IProps {
  position: IPosition;
  handleEdit: (position: IPosition) => void;
  handleDelete: (id: number) => void;
}

export const PositionRow: React.FC<IProps> = ({ position, handleEdit, handleDelete }) => {
  const [open, setOpen] = React.useState(true);
  const classes = usePositionRowStyles();
  const { name, types } = position;

  return (
    <>
      <TableRow className={classes.nameRow} hover>
        <TableCell className={classes.nameCell}>
          <div className={classes.alignFlex}>
            <div className={classes.nameText}>{capitalize(name)}</div>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>
        </TableCell>
        <TableCell />
        <TableCell className={classes.nameCell}>
          <div className={classes.btnWrapper}>
            <div className={classes.btnCircle} onClick={() => handleEdit(position)}>
              <img src={edit} alt="edit button" className={classes.baseBtn} />
            </div>
            <div className={classes.btnCircle} onClick={() => handleDelete(position.id)}>
              <DeleteForeverIcon className={classes.baseBtn} fontSize={'small'} />
            </div>
          </div>
        </TableCell>
      </TableRow>
      {open
        ? types.map(type => (
            <TableRow
              className={classNames(classes.tableRow, classes.disablePadding, classes.transition)}
              key={type.name}
              hover
            >
              <TableCell className={classes.disablePadding}>
                <div className={classes.arrowWrapper}>
                  <div className={classes.tableArrow} />
                </div>
              </TableCell>
              <TableCell>{type.name}</TableCell>
              <TableCell />
            </TableRow>
          ))
        : null}
    </>
  );
};
