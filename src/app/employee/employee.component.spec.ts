import { AuthenticationService } from './../authentication.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers:[AuthenticationService] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1'); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert "check authentication" has been called',()=>{
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    let salSlip = component.getSalarySlip();
    //expect(salSlip).toEqual('Salary Slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  })

  it('should assert value for "h1" element to be value of salslip',()=>{
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salSlip);
  })


});
