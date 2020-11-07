import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsSiteComponent } from './stats-site.component';

describe('StatsSiteComponent', () => {
  let component: StatsSiteComponent;
  let fixture: ComponentFixture<StatsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
