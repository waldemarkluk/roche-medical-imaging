import { createReducer, on, props } from '@ngrx/store';

import { AnnotationStore } from '../models/annotations.model';
import {
  drawImageAndAnnotationsButtonClicked,
  loadAnnotationsError,
  loadAnnotationsSuccess
} from '../actions/annotations.actions';

export const initialState: AnnotationStore = {annotations: []};

export const annotationsReducer = createReducer(
  initialState,
  on(drawImageAndAnnotationsButtonClicked,
    (state: AnnotationStore) => initialState),
  on(loadAnnotationsError,
    (state: AnnotationStore) => initialState),
  on(loadAnnotationsSuccess,
    (state: AnnotationStore, updatedState: AnnotationStore) => updatedState)
)