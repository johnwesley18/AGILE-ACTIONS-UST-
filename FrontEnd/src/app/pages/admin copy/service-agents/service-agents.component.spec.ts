import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAgentsComponent } from './service-agents.component';

describe('ServiceAgentsComponent', () => {
  let component: ServiceAgentsComponent;
  let fixture: ComponentFixture<ServiceAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAgentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
