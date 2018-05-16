import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLevelAlertComponent } from './app-level-alert.component';

describe('AlertComponent', () => {
  let component: AppLevelAlertComponent;
  let fixture: ComponentFixture<AppLevelAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLevelAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLevelAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
