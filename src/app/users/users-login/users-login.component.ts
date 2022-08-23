import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {User} from "../model/user";
import {UsersService} from "../services/users.service";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";




@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss'],

})
export class UsersLoginComponent implements OnInit {
  hide: any;

  user : User = {
    _id: "", email: "", name: "", perfil: "", senha: "", validado: ""

  }
  constructor( private service: UsersService,
               private route: ActivatedRoute,
               private router: Router,
               ) { }

  ngOnInit(): void {
  }

  entrar(): void{

    this.service.entrar(this.user.email, this.user.senha).subscribe(resposta => {
      console.log(resposta)
      if (resposta != null){
        this.router.navigate(['users'])
      }else{
        alert("Dados invalidos. Verifique seu Login e Senha")
      }
      localStorage.setItem('id', resposta._id.toString())
      localStorage.setItem('perfil', resposta.perfil)
      localStorage.setItem('validado', resposta.validado)
      localStorage.setItem('nome', resposta.name);
    } )
  }

  onCreate(){
    this.router.navigate(['users/new'])
  }



}
