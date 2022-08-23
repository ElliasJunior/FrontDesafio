import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {delay, first, Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";



@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private readonly API = 'api/users'

  constructor(private httpClient: HttpClient,) {
  }


  lista() {
    return this.httpClient.get<User[]>(this.API).pipe(first(), delay(1000), tap(users => console.log(users)));
  }

  save(record: User) {
    return this.httpClient.post<User>(this.API, record).pipe(first());
  }

  delete(_id: string): Observable<void> {
    const url = `${this.API}/${_id}`
    return this.httpClient.delete<void>(url)

  }

  update(usuario: User): Observable<void>{
    const url = `${this.API}/${usuario._id}`
    return this.httpClient.put<void>(url, usuario);
  }

  resetSenha(_id: string): Observable<void>{
    const url = `${this.API}/reset/${_id}`
    return this.httpClient.put<void>(url, _id);
  }


  findById(_id: string): Observable<User> {
    const url = `${this.API}/${_id}`

    return this.httpClient.get<User>(url);

  }

  entrar(email: string, senha: string  ): Observable<User> {
    const url = `${this.API}/entrar?email=${email}&senha=${senha}`

    return this.httpClient.get<User>(url);

  }



}
