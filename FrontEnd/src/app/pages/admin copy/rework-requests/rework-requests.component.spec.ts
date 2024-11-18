import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReworkRequestsComponent } from './rework-requests.component';

describe('ReworkRequestsComponent', () => {
  let component: ReworkRequestsComponent;
  let fixture: ComponentFixture<ReworkRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReworkRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReworkRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
