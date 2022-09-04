import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    userid: string = '';
    password: string = '';
    // errorMassage = "User credential not match";
    errorMassage = "";
    
    users = {'userid': '', 'password': ''}
    constructor(private router:Router, private httpClient: HttpClient) { }


  ngOnInit(): void {
  }
  login(){
    console.log('user inputs:', this.userid, this.password);
    console.log('login clicked');

    let users = {'username': this.userid, 'password': this.password}
    console.log(users);

    // this.httpClient.post(BACKEND_URL + '/api/login', users,  httpOptions).subscribe((data:any)=>{
    this.httpClient.post(BACKEND_URL + '/api/login', users).subscribe(res=>
      {console.log(res);},);
    
  }
}
