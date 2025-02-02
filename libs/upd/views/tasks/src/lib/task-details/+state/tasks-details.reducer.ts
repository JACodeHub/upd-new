import { createReducer, on, Action } from '@ngrx/store';

import * as TasksDetailsActions from './tasks-details.actions';
import type { TaskDetailsData } from '@cra-arc/types-common';

export const TASKS_DETAILS_FEATURE_KEY = 'tasksDetails';

export interface TasksDetailsState {
  data: TaskDetailsData;
  loaded: boolean; // has the TasksDetails list been loaded
  error?: string | null; // last known error (if any)
}

export interface TasksDetailsPartialState {
  readonly [TASKS_DETAILS_FEATURE_KEY]: TasksDetailsState;
}

export const tasksDetailsInitialState: TasksDetailsState = {
  // set initial required properties
  data: {
    _id: '',
    title: '',
    dateRange: '',
    comparisonDateRange: '',
    avgTaskSuccessFromLastTest: 1,
    dateFromLastTest: new Date(),
    taskSuccessByUxTest: []
  },
  loaded: false,
  error: null,
};

const reducer = createReducer(
  tasksDetailsInitialState,
  on(TasksDetailsActions.loadTasksDetailsInit, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TasksDetailsActions.loadTasksDetailsSuccess, (state, { data }) =>
    data === null
      ? {
          ...state,
          loaded: true,
          error: null,
        }
      : {
          ...state,
          data: { ...data },
          loaded: true,
          error: null,
        }
  ),
  on(TasksDetailsActions.loadTasksDetailsError, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  }))
);

export function tasksDetailsReducer(
  state: TasksDetailsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
