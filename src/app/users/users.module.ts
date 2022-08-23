import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import { UserFormComponent } from './user-form/user-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,

  ]

})
export class UsersModule { }
