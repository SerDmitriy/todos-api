import { createAsyncAction } from 'typesafe-actions';
import { IPosition } from 'models/positions/positions.model';

enum GET_POSITIONS_ACTION_TYPE {
  REQUEST = 'GET_POSITIONS_REQUEST',
  SUCCESS = 'GET_POSITIONS_SUCCESS',
  FAILURE = 'GET_POSITIONS_FAILURE',
  CANCEL = 'GET_POSITIONS_CANCEL',
}

export const getPositionsActions = createAsyncAction(
  GET_POSITIONS_ACTION_TYPE.REQUEST,
  GET_POSITIONS_ACTION_TYPE.SUCCESS,
  GET_POSITIONS_ACTION_TYPE.FAILURE,
  GET_POSITIONS_ACTION_TYPE.CANCEL
)<void, IPosition[], string, void>();
