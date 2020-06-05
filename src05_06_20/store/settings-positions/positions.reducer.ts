import { ActionType, createReducer } from 'typesafe-actions';
import { IPosition } from 'models/positions/positions.model';
import { getPositionsActions } from 'store/settings-positions/positions.action';

export interface IPositionsState {
  data: IPosition[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IPositionsState = {
  data: null,
  isLoading: false,
  error: null,
};

type PositionsActions = ActionType<typeof getPositionsActions>;

export const positionsReducer = createReducer<IPositionsState, PositionsActions>(initialState)
  .handleAction(
    getPositionsActions.request,
    (state): IPositionsState => ({
      ...state,
      isLoading: true,
    })
  )
  .handleAction(
    getPositionsActions.success,
    (state, action): IPositionsState => ({
      data: action.payload,
      isLoading: false,
      error: null,
    })
  )
  .handleAction(
    getPositionsActions.failure,
    (state, action): IPositionsState => ({
      data: [],
      isLoading: false,
      error: action.payload,
    })
  )
  .handleAction(
    getPositionsActions.cancel,
    (): IPositionsState => ({
      ...initialState,
    })
  );
