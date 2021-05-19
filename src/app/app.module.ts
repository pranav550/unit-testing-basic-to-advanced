import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { MatcherStringTestComponent } from './matcher-string-test/matcher-string-test.component';
import { MatcherArrayTestComponent } from './matcher-array-test/matcher-array-test.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventTestComponent } from './event-test/event-test.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MatcherStringTestComponent,
    MatcherArrayTestComponent,
    CustomerReservationComponent,
    EmployeeComponent,
    EventTestComponent,
    ProductListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
