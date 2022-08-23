import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from '@angular/material/checkbox';









@NgModule({
 exports:[MatTableModule,
   MatCardModule,
   MatToolbarModule,
   MatProgressSpinnerModule,
   MatDialogModule,
   MatButtonModule,
   MatFormFieldModule,
   MatIconModule,
   MatInputModule,
   MatSnackBarModule,
   MatSelectModule,
   MatCheckboxModule



 ]
})
export class AppMaterialModule { }
