import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzcashComponent } from './jazzcash.component';

describe('JazzcashComponent', () => {
  let component: JazzcashComponent;
  let fixture: ComponentFixture<JazzcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JazzcashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JazzcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
