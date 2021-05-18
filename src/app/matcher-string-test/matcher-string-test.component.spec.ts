import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherStringTestComponent } from './matcher-string-test.component';

describe('MatcherStringTestComponent', () => {
  let component: MatcherStringTestComponent;
  let fixture: ComponentFixture<MatcherStringTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatcherStringTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcherStringTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing string "toBe" for matcher ===',()=>{
     expect(component.firstStr).toBe('Hello World')
  })

  it('testing string "toEqual" for matcher ==',()=>{
    expect(component.firstStr).toEqual('Hello World')
 })

 it('testing string "toContain" check hello present is string or not',()=>{
   let str="Hello World Welcome to Rudra-Tech-2014";
  expect(str).toContain('Hello World')
})

it('testing string "toMatch" matcher is the regular expresssion',()=>{
  let message="This 4th lane of Underworld";
  expect(message).toMatch(/\d+/);
  expect(message).toMatch("Underworld");
})

it('testing string "not toEqual" for matcher ==',()=>{
  expect(component.firstStr).not.toEqual('Hello World! 2')
})

});

// differnce b/w toBe and toEqual
describe('toBe vs ToEqual',()=>{
  xit('should test "toBe" matcher',()=>{
     let a ={
       val:10
     };
     let b={
       val:10
     };
     expect(a).toBe(b);
  });

  it('should test "toBe" matcher',()=>{
    let a ={
      val:10
    };
    let b={
      val:10
    };
    expect(a).toEqual(b);
 });

})

describe('Array test', ()=>{
  it('Testing array using "toEqual" array should be equal',()=>{
    let a = [1,2,3];
    expect(a).toEqual([1,2,3]);
  });
  it('Testing array using "toContain" array should be equal',()=>{
    let strArr = ['abc','def','xyz'];
    expect(strArr).toContain('def');
  });
})
