import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ProductService } from './../product.service';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';


describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement:DebugElement;
  let productService:ProductService; 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers:[ProductService],
      imports:[FormsModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productService = TestBed.get(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement
  });

  it('should create Product Service', () => {
    expect(ProductService).toBeTruthy();
  });

  it('should test filter product list (done)', (done) => {
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();

    component.filterProductList({});
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      //Get text from first <li> of the list
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    });
  });

  it('should test filter product list (async)', async(() => {
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();

    component.filterProductList({});

   fixture.whenStable().then(() => {
      fixture.detectChanges();
      //Get text from first <li> of the list
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      
    });
  }));

  it('should test filter product list (fakeasync)', fakeAsync(() => {
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();

    component.filterProductList({});
      
      tick();
      fixture.detectChanges();
      //Get text from first <li> of the list
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
    }));

    it('Example -fakeasync and tick test the asynchronous code in synchronous way',fakeAsync(()=>{
      let isLoggedin = false;
      setTimeout(()=>{
        isLoggedin = true
      },100)
      expect(isLoggedin).toBe(false);
      tick(50);
      expect(isLoggedin).toBe(false);
      tick(50);
      expect(isLoggedin).toBe(true);
    }))
});
