import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecmpComponent } from './homecmp/homecmp.component';
import { MinioncmpComponent } from './minioncmp/minioncmp.component';
import { PiratecmpComponent } from './piratecmp/piratecmp.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { YodacmpComponent } from './yodacmp/yodacmp.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:"home",component:HomecmpComponent},
  {path:"yoda",component:YodacmpComponent},
  {path:"minion",component:MinioncmpComponent},
  {path:"pirate",component:PiratecmpComponent},
  {path:"feedback",component:SubscribeComponent},
  {path: '**', component:  HomecmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
