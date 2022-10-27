import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFiberJSComponent } from './ngx-fiber-js.component';

describe('NgxFiberJSComponent', () => {
  let component: NgxFiberJSComponent;
  let fixture: ComponentFixture<NgxFiberJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFiberJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFiberJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
