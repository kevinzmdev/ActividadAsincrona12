import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAsincronaComponent } from './form-asincrona.component';

describe('FormAsincronaComponent', () => {
  let component: FormAsincronaComponent;
  let fixture: ComponentFixture<FormAsincronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAsincronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAsincronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
