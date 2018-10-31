import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeComponent } from './arme.component';

describe('ArmeComponent', () => {
  let component: ArmeComponent;
  let fixture: ComponentFixture<ArmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
