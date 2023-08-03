import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import {
  drawImageAndAnnotationsButtonClicked,
  loadAnnotationsError,
  loadAnnotationsSuccess,
  loadImageError,
  loadImageSuccess
} from '../actions/annotations.actions';
import { AnnotationStore } from '../models/annotations.model';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {
	
  image: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  imageUrl = 'https://image.dummyjson.com/512x512/101010';
  dataUrl = 'https://dummyjson.com/http/200/[{\"id\":\"a1\",\"radiusX\":20,\"radiusY\": 25,\"x\":50,\"y\":60},{\"id\":\"a2\",\"radiusX\":28,\"radiusY\": 12,\"x\":240,\"y\":90}]';

  constructor(private httpClient: HttpClient,
    private store: Store<AnnotationStore>) { }
  
  fetchData(): void {
	this.store.dispatch(drawImageAndAnnotationsButtonClicked());
	this.httpClient.get(this.imageUrl, {headers: {'Content-Type': 'image/png'}, responseType: 'blob'}).subscribe(
	  (response: any) => {
		this.image.next(response);
        this.store.dispatch(loadImageSuccess());
        this.httpClient.get(this.dataUrl, {responseType: 'json'}).subscribe(
		  (data: any) => {
			const message = JSON.parse(data?.message);
			this.store.dispatch(loadAnnotationsSuccess({annotations: message}));
		  },
	      (error: Error) => {
			this.store.dispatch(loadAnnotationsError());
	      }
		);
	  },
	  (error: Error) => {
        this.store.dispatch(loadImageError());
	  }
	);
  }
  
  
}
