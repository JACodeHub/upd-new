import { createReducer, on, Action } from '@ngrx/store';

import * as OverviewActions from './overview.actions';
import { OverviewData } from '@cra-arc/types-common';

export const OVERVIEW_FEATURE_KEY = 'overview';

export interface OverviewState {
  data: OverviewData;
  loaded: boolean; // has the Overview data been loaded
  loading: boolean;
  error: string | null; // last known error (if any)
}

export interface OverviewPartialState {
  readonly [OVERVIEW_FEATURE_KEY]: OverviewState;
}

export const initialState: OverviewState = {
  // set initial required properties
  data: {
    dateRange: '',
    comparisonDateRange: '',
  },
  loaded: false,
  loading: false,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(OverviewActions.init, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(OverviewActions.loadOverviewSuccess, (state, payload: { data: OverviewData }) => ({
    data: payload.data,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(OverviewActions.loadOverviewError, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    error,
  }))
);

export function overviewReducer(state: OverviewState | undefined, action: Action) {
  return reducer(state, action);
}
