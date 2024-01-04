import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element';
register()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {}


  loginUser(data:any){
    console.log(data);
    let users = JSON.parse(localStorage.getItem('users')||'[]')
    if(users.length == 0){
      alert('Wrong email or password')
      
    }else{
      let flag = true
      for(let i = 0 ;i<users.length ; i++){
        if(users[i].email == data.email && users[i].password == data.password){
          
          users[i].isLogin = true 
          localStorage.setItem('users',JSON.stringify(users))

          flag = false

          console.log('login successfully')
          this.router.navigate(['/home'])
        }
      }
      if(flag){
        alert('Wrong email or password')
      }
    }
    
  }
}
