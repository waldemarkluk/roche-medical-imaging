import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnotationsComponent } from './components/annotations/annotations.component';
import { annotationsReducer } from './reducers/annotations.reducer';
import { AnnotationService } from './services/annotation.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnotationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	StoreModule.forRoot({elements: annotationsReducer})
  ],
  providers: [AnnotationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
