import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeBuiltinsComponent } from './pipe-builtins.component';

describe('PipeBuiltinsComponent', () => {
  let component: PipeBuiltinsComponent;
  let fixture: ComponentFixture<PipeBuiltinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeBuiltinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeBuiltinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
