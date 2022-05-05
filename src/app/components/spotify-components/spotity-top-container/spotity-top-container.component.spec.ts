import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotityTopContainerComponent } from './spotity-top-container.component';

describe('SpotityTopContainerComponent', () => {
  let component: SpotityTopContainerComponent;
  let fixture: ComponentFixture<SpotityTopContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotityTopContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotityTopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
