import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('birthdate');
  age = sessionStorage.getItem('age');
  email = sessionStorage.getItem('email');
  valid = sessionStorage.getItem('valid');

  usernum: number = 0;
  cnt: number = 0;
  paramsub: any;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.paramsub = this.route.paramMap.subscribe(params => {
      // this.username = params.get('id');
    });
  }

  title = 'Account Page';
  logout(){

    sessionStorage.clear();
    console.log(sessionStorage);
    this.router.navigateByUrl('/');

  }

}
