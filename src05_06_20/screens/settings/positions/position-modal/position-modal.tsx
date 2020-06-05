import React, { Dispatch, SetStateAction } from 'react';
import { Close } from '@material-ui/icons';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Dialog, DialogActions, Fab } from '@material-ui/core';
import { Transition } from 'shared/transition/transition';
import { SharedButton } from 'shared/button/shared-button';
import { usePositionModalStyles } from 'modules/main/settings/positions/position-modal/use-position-modal.styles';
import AddIcon from '@material-ui/icons/Add';
import { InputBlock } from 'shared/form-elements/input/input-block';
import { IPosition, IPositionTypes } from 'models/positions/positions.model';
import { useDispatch } from 'react-redux';
import { addPositionThunk, updatePositionThunk } from 'store/settings-positions/positions.thunk';
import { InitId } from 'constants/types-and-validation/init-id';

interface IProps {
  currentPosition: IPosition;
  setCurrentPosition: Dispatch<SetStateAction<IPosition>>;
  isOpen: boolean;
  handleClose: () => void;
}

export const PositionModal: React.FC<IProps> = ({ currentPosition, setCurrentPosition, isOpen, handleClose }) => {
  const classes = usePositionModalStyles();
  const dispatch = useDispatch();
  const handleChange = (name: string | null, value?: string, index?: number) => {
    if (name !== null) {
      setCurrentPosition({ ...currentPosition, name });
    }
    if (value !== undefined) {
      const newTypeList = currentPosition.types.map((type, i: number) => {
        return i === index ? { ...type, name: value } : type;
      });
      setCurrentPosition({ ...currentPosition, types: newTypeList });
    }
  };

  const addType = () => {
    if (currentPosition.types && currentPosition.types[currentPosition.types.length - 1]?.name !== '') {
      setCurrentPosition({ ...currentPosition, types: [...currentPosition.types, { id: InitId, name: '' }] });
    }
  };

  const deleteInputHandler = (index: number) => {
    const newTypeList = currentPosition.types.filter((type, i: number) => i !== index);
    setCurrentPosition({ ...currentPosition, types: newTypeList });
  };

  const submitHandler = () => {
    const positionForAdd = {
      name: currentPosition.name,
      types: currentPosition.types.map(type => type.name),
    };
    const filteredPositionList = { ...currentPosition, types: currentPosition.types.filter(type => type.name.trim()) };
    if (currentPosition.id === 0) {
      dispatch(addPositionThunk(positionForAdd, handleClose));
    } else {
      dispatch(updatePositionThunk(filteredPositionList, handleClose));
    }
  };

  return (
    <Dialog
      maxWidth={'md'}
      TransitionComponent={Transition}
      fullWidth={false}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <div className={classes.modalWrapper}>
        <DialogTitle className={classes.dialogTitle}>
          <Close onClick={handleClose} className={classes.closeIcon} />
        </DialogTitle>
        <h2 id="form-dialog-title" className={classes.title}>
          {currentPosition.id ? 'Edit Position and Types' : 'Create new Position and Types'}
        </h2>
        <form>
          <div className={classes.content}>
            <div className={classes.flexColumn}>
              <div className={classes.text}>Add Position Name:</div>
              <InputBlock label={'Position name:'} value={currentPosition.name} setValue={handleChange} />
            </div>
            <div className={classes.flexColumn}>
              <div className={classes.text}>Add Position Types:</div>
              {currentPosition.types.map((type: IPositionTypes, index: number) => (
                <InputBlock
                  key={`${index} input`}
                  label={'Type:'}
                  value={type.name}
                  setValue={newValue => handleChange(null, newValue, index)}
                  deleteInputHandler={() => deleteInputHandler(index)}
                />
              ))}
              <div className={classes.addWrapper}>
                <Fab className={classes.createNewBtn} aria-label="add" onClick={() => addType()}>
                  <AddIcon style={{ fontSize: '18px' }} />
                </Fab>
                <p className={classes.addText}>Add Type</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <DialogActions className={classes.actionsWrapper}>
        <SharedButton filled={false} label={'Cancel'} onClick={handleClose} />
        <SharedButton filled={true} label={'Submit'} onClick={submitHandler} />
      </DialogActions>
    </Dialog>
  );
};
