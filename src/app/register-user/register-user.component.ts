import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  private users =[];
  private nextNum: number;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(user){
    this.users.push(user);
    localStorage.setItem('users',JSON.stringify(this.users))
  }

}
