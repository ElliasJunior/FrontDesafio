import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UsersService} from "../services/users.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   users$: Observable<User[]>;
  user : User = {
    _id: "", email: "", name: "", perfil: "", senha: "", validado: ""

  }
  displayedColumns = ['_id', 'name', 'email', 'senha', 'perfil','validado', 'actions'];
 public admin: boolean | undefined;
 public valid: boolean = false;
 public nomeExibir = localStorage.getItem('nome');

  //userService : UsersService;

  constructor(private userService : UsersService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              ) {
    this.users$ = this.userService.lista().
    pipe(
      catchError(error => {
        this.onError('Erro ao Carregar Usuários')
        return of([])
      })
    )
    ;
  }

  onError( errorMsg : string ) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  ngOnInit(): void {
    let nomeF = localStorage.getItem('nome');
    if(localStorage.getItem('id') !== null && localStorage.getItem('perfil') !== null && localStorage.getItem('validado') !== null){
      if(localStorage.getItem('perfil') === 'Administrador')
      this.admin = true;
    } else {
      this.router.navigate(['login'])
    }
    if (localStorage.getItem('validado') != 'Sim'){
      this.valid = true;
      console.log(this.valid)
      alert("Usuario não validado. Favor verificar seu e-mail")
    }
  }

  onAdd(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }

  logout(){
    localStorage.removeItem('nome');
    localStorage.removeItem('perfil');
    localStorage.removeItem('validado')
    this.router.navigate(['login'])

  }

  reset(_id : string){
    this.userService.resetSenha(_id).subscribe((resposta) => {
      alert("Senha alterada com sucesso")
    })
    this.load()
  }

  load() {
    location.reload()
  }




}
