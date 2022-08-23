import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UsersService} from "../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit {
  form: any;
  hide: any;

  user : User = {
    _id: "", email: "", name: "", perfil: "", senha: "", validado: ""

  }

  constructor(private service: UsersService,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {
    if(localStorage.getItem('id') != null && localStorage.getItem('perfil') != null){
    } else {
      this.router.navigate(['login'])
    }
    this.user._id =<string>this.route.snapshot.paramMap.get('id');
   this.findByd();
  }

  findByd(): void{
    this.service.findById(this.user._id!).subscribe(resposta => {
      this.user.name = resposta.name;
      this.user.email = resposta.email;
      this.user.senha = resposta.senha;
      this.user.perfil = resposta.perfil;
      this.user.validado = resposta.validado;
      console.log(resposta)
    } )
  }

  update(): void{
    this.service.update(this.user).subscribe((resposta) => {
      this.router.navigate(['users'])


    })
  }


  onCancel() {
    this.router.navigate(['users'])
  }

}
