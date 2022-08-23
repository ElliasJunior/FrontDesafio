import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  hide: any;

  constructor(private formBuilder: FormBuilder, private service: UsersService,
              private _snackBar: MatSnackBar,
              private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      senha: [null],
      perfil: [null],
      validado: [null]
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
  this.service.save(this.form.value).subscribe(result => this.onSucess(), error =>  this.onErro()

  );
  }

  onCancel() {
  this.location.back();
  }

  private onSucess(){
    this._snackBar.open('Usuário Salvo com Sucesso', '', {duration: 3000});
    this.onCancel();
  }

  private onErro() {
    this._snackBar.open('Erro ao Salvar', '', {duration: 3000});
  }
}
