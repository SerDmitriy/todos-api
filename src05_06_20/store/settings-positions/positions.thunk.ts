import { AppThunk } from 'store/index.thunk';
import { getPositionsActions } from 'store/settings-positions/positions.action';
import { IBasePosition, IPosition } from 'models/positions/positions.model';
import { PositionsApi } from 'api/positions-api';

export const getPositionListThunk = (): AppThunk<Promise<void>> => async dispatch => {
  dispatch(getPositionsActions.request());
  try {
    const data: IPosition[] = await PositionsApi.getPositionList();
    dispatch(getPositionsActions.success(data));
  } catch (e) {
    dispatch(getPositionsActions.failure(e.toString()));
  }
};

export const addPositionThunk = (
  position: IBasePosition,
  handleClose: () => void
): AppThunk<Promise<void>> => async dispatch => {
  dispatch(getPositionsActions.request());
  try {
    await PositionsApi.addPosition(position);
    handleClose();
  } catch (e) {
    dispatch(getPositionsActions.failure(e.toString()));
  }
  dispatch(getPositionListThunk());
};

export const updatePositionThunk = (
  position: IPosition,
  handleClose: () => void
): AppThunk<Promise<void>> => async dispatch => {
  dispatch(getPositionsActions.request());
  try {
    await PositionsApi.updatePosition(position);
    handleClose();
  } catch (e) {
    dispatch(getPositionsActions.failure(e.toString()));
  }
  dispatch(getPositionListThunk());
};

export const deletePositionThunk = (id: number): AppThunk<Promise<void>> => async dispatch => {
  dispatch(getPositionsActions.request());
  try {
    await PositionsApi.deletePosition(id);
  } catch (e) {
    dispatch(getPositionsActions.failure(e.toString()));
  }
  dispatch(getPositionListThunk());
};
