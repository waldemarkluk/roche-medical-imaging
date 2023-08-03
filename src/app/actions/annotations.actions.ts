import { createAction, props } from '@ngrx/store';

import { AnnotationStore } from '../models/annotations.model';

export const drawImageAndAnnotationsButtonClicked =
 createAction('[Annotations Component] Draw annotations button is clicked');
 
export const loadImageSuccess =
 createAction('[API event] PNG image successfully loaded');
 
export const loadImageError =
 createAction('[API event] Error while loading PNG image');
 
export const loadAnnotationsSuccess =
 createAction('[API event] Annotations successfully loaded',
   props<AnnotationStore>());
 
export const loadAnnotationsError =
 createAction('[API event] Error while loading annotations');