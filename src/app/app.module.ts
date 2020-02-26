import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetemployeedataComponent } from './getemployeedata/getemployeedata.component';
import { UserdataserService } from './userdataser.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    GetemployeedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserdataserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
