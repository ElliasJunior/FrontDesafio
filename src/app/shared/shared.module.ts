import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import { UsersDeleteComponent } from '../users/users-delete/users-delete.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersUpdateComponent } from '../users/users-update/users-update.component';
import {MatRadioModule} from "@angular/material/radio";
import { UsersCheckComponent } from '../users/users-check/users-check.component';
import { UsersLoginComponent } from '../users/users-login/users-login.component';




@NgModule({
  declarations: [
    ErrorDialogComponent,
    UsersDeleteComponent,
    UsersUpdateComponent,
    UsersCheckComponent,
    UsersLoginComponent,

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,

  ],

  exports: [ErrorDialogComponent]
})
export class SharedModule { }
