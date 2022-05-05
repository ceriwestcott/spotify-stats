import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotityTopContentComponent } from './spotity-top-content.component';

describe('SpotityTopContentComponent', () => {
  let component: SpotityTopContentComponent;
  let fixture: ComponentFixture<SpotityTopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotityTopContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotityTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
