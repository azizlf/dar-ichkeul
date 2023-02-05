import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesRoomDetailsComponent } from './prices-room-details.component';

describe('PricesRoomDetailsComponent', () => {
  let component: PricesRoomDetailsComponent;
  let fixture: ComponentFixture<PricesRoomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesRoomDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
