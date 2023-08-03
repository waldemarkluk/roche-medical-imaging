import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationsComponentComponent } from './annotations-component.component';

describe('AnnotationsComponentComponent', () => {
  let component: AnnotationsComponentComponent;
  let fixture: ComponentFixture<AnnotationsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnotationsComponentComponent]
    });
    fixture = TestBed.createComponent(AnnotationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
