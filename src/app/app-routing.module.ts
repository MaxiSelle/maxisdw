import { LoginGuard } from './guards/login.guard';
import { AddItemComponent } from './add-item/add-item.component';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { StatsSiteComponent } from './stats-site/stats-site.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "details/:id",
    component:DetailsComponent,
    canActivate:[LoginGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate:[LoginGuard]
  },
  {
    path: "department/:item",
    component: HomeComponent,
    canActivate:[LoginGuard]
  },
  {
    path: "addItem",
    component: AddItemComponent,
    canActivate:[LoginGuard]
  },
  {
    path:"CreateUser",
    component:CreateUserComponent,
  },
  {
    path:"Stats",
    component:StatsSiteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
 }
