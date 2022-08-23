import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.scss']
})
export class UsersDeleteComponent implements OnInit {

  user : User = {
    _id: "", email: "", name: "", perfil: "", senha: "", validado: ""

  }


  constructor(private service:UsersService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              ) { }

  ngOnInit(): void {
    if(localStorage.getItem('id') != null && localStorage.getItem('perfil') != null){
    } else {
      this.router.navigate(['login'])
    }
    this.user._id =<string>this.route.snapshot.paramMap.get('id');
    this.findById()
  }

  findById(): void{
    this.service.findById(this.user._id).subscribe((resposta) => {
      this.user.name = resposta.name;
      this.user.email = resposta.email;
      console.log(resposta)
    })

  }

  delete(): void {
    this.service.delete(this.user._id!).subscribe(resposta => {
      this.router.navigate(['users'])

    })
  }

  onCancel() {
      this.location.back();

  }


  }

