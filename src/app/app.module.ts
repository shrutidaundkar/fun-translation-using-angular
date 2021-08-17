import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingcmpComponent } from './routingcmp/routingcmp.component';
import { HomecmpComponent } from './homecmp/homecmp.component';
import { YodacmpComponent } from './yodacmp/yodacmp.component';
import { MinioncmpComponent } from './minioncmp/minioncmp.component';
import { PiratecmpComponent } from './piratecmp/piratecmp.component';
import {HttpClientModule} from '@angular/common/http';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingcmpComponent,
    HomecmpComponent,
    YodacmpComponent,
    MinioncmpComponent,
    PiratecmpComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
