import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  submit(data:any){
    console.log(data.value);
    let user = JSON.parse(localStorage.getItem('users')|| '[]')
    let fdata = data.value
    fdata.isLogin = false
    user.push(fdata)
    localStorage.setItem('users',JSON.stringify(user))
    data.reset()
    alert('user register successfully')
  }
}
