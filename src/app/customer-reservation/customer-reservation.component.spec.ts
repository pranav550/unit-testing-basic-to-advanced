import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReservationComponent } from './customer-reservation.component';

describe('CustomerReservationComponent', () => {
 
  let customerService:CustomerReservationComponent;

  beforeEach(()=>{
    customerService = new CustomerReservationComponent();
  })

  afterEach(()=>{
    customerService = null;
  })

  beforeAll(()=>{

  })

  afterAll(()=>{
    
  })
  
  it('should register customer / increase current customer count by 1',()=>{
      let custCount = customerService.registerCustomer();
      expect(custCount).toEqual(11);
  })

  it('should un-register customer / decrease current customer count by 1',()=>{
      let custCount = customerService.unregisterCustomer();
      expect(custCount).toEqual(9);
  })

  it('Testing room is reserved or not', ()=>{
    //Arrange
     let custReserve = new CustomerReservationComponent(); 
    // Act
       let isReserved = custReserve.reserveRoom();
    //Assert
    expect(isReserved).toBeTruthy();
  })
});
