import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersDeleteComponent} from "./users/users-delete/users-delete.component";
import {UsersUpdateComponent} from "./users/users-update/users-update.component";
import {UsersCheckComponent} from "./users/users-check/users-check.component";
import {UsersLoginComponent} from "./users/users-login/users-login.component";

const routes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },

  {
    path: 'users/delete/:id',
    component: UsersDeleteComponent
  },

  {
    path: 'users/update/:id',
    component: UsersUpdateComponent
  },

  {
    path: 'users/check/:id',
    component: UsersCheckComponent
  },
  {
    path: 'login',
    component: UsersLoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
