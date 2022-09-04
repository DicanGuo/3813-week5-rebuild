import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  // user = {'username': '', 'email': '', 'birthdate': '', 'age': '', 'valid': false}
  username = '';
  birthdate = '';
  age = '';
  email = '';
  valid = '';
  // username = sessionStorage.getItem('username');
  // birthdate = sessionStorage.getItem('birthdate');
  // age = sessionStorage.getItem('age');
  // email = sessionStorage.getItem('email');
  // valid = sessionStorage.getItem('valid');
  // user = {'username': this.username, 'email': this.email, 'birthdate': this.birthdate, 'age': this.age, 'valid': this.valid}

  constructor(private route: ActivatedRoute, private router:Router) { 
    // if (!(sessionStorage.getItem('valid')=="true")){
    //   alert("login please");
    //   this.router.navigateByUrl("/login");
    // }
    this.username = sessionStorage.getItem('username')!;
    this.birthdate = sessionStorage.getItem('birthdate')!;
    this.age = sessionStorage.getItem('age')!;
    this.email = sessionStorage.getItem('email')!;
    console.log(this.username);
    console.log(this.birthdate);
    console.log(this.age);
    console.log(this.email);


  }
  ngOnInit(): void {
  }
  title = "Profile"

  logout(){
    sessionStorage.clear();
    console.log(sessionStorage);
    this.router.navigateByUrl('/');
  }
  save(){
    console.log(sessionStorage);

    // sessionStorage.setItem('username', this.user.username);
    sessionStorage.setItem('age', this.age);
    console.log(sessionStorage)
    //this.router.navigateByUrl('/account/' + this.username);

  }
}
