import { createReducer, on, Action } from '@ngrx/store';

import * as ProjectsDetailsActions from './projects-details.actions';
import { ProjectsDetailsData } from './projects-details.models';

export const PROJECTS_DETAILS_FEATURE_KEY = 'projectsDetails';

export interface ProjectsDetailsState {
  data: ProjectsDetailsData;
  loaded: boolean; // has the ProjectsDetails list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProjectsDetailsPartialState {
  readonly [PROJECTS_DETAILS_FEATURE_KEY]: ProjectsDetailsState;
}

export const projectDetailsInitialState: ProjectsDetailsState = {
  // set initial required properties
  data: {},
  loaded: false,
  error: null,
};

const reducer = createReducer(
  projectDetailsInitialState,
  on(ProjectsDetailsActions.loadProjectsDetailsInit, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProjectsDetailsActions.loadProjectsDetailsSuccess, (state, { data }) => ({
    data: data,
    loaded: true,
    error: null,
  })),
  on(ProjectsDetailsActions.loadProjectsDetailsError, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  }))
);

export function projectsDetailsReducer(
  state: ProjectsDetailsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
