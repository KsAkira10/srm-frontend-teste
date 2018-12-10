import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPainelComponent } from './main-painel.component';

describe('MainPainelComponent', () => {
  let component: MainPainelComponent;
  let fixture: ComponentFixture<MainPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
