import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Annotation, AnnotationStore } from '../../models/annotations.model';
import { AnnotationService } from '../../services/annotation.service';

@Component({
  selector: 'app-annotations',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.sass']
})
export class AnnotationsComponent implements OnInit {
  @ViewChild('medicalImage') canvas: ElementRef<HTMLCanvasElement> | undefined;
  annotationsObservable$: Observable<AnnotationStore>;
  
  constructor(private annotationsService: AnnotationService,
    private store: Store<{elements: AnnotationStore}>) {
	  this.annotationsObservable$ = store.select('elements');
	};
  
  ngOnInit(): void {
	this.annotationsObservable$.subscribe((data: AnnotationStore) => {
	  if (this.canvas) {
	    const ctx = this.canvas.nativeElement.getContext('2d');
		if (ctx) {
		  ctx.strokeStyle = '#FF0000';
	      data.annotations.forEach((el: Annotation) => {  
	        ctx.beginPath(); 
		    ctx.ellipse(el.x, el.y, el.radiusX, el.radiusY, 0, 0, 2 * Math.PI);
		    ctx.stroke(); 
		    ctx.closePath();
	      })
		}
	  }
	});
	this.annotationsService.image.subscribe((image: any) => {
	  if (this.canvas && image) {
	    const ctx = this.canvas.nativeElement.getContext('2d');
		if (ctx) {
	      ctx.clearRect(0, 0, 512, 512);
		  let img = new Image();
		  img.onload = function () {
		    ctx.drawImage(img, 0, 0, 300, 150);
		  }
		  img.src = URL.createObjectURL(image);
		  console.log(img);
		}
	  }
	});
  }
  
  fetchData(): void {
	this.annotationsService.fetchData();
  }
}
