import {OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  themeToggle = false;
  sliderConfig = {
    spaceBetween:  1,
    slidesPerView: 1.7
  } 
  user:any
  todos:any=[]

  constructor(private router:Router) {
    console.log(this.todos);
    this.getUser();
    this.getTodos()
  }
  ngOnInit(): void {
  // Use matchMedia to check the user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Initialize the dark theme based on the initial
  // value of the prefers-color-scheme media query
  this.initializeDarkTheme(prefersDark.matches);

  // Listen for changes to the prefers-color-scheme media query
  prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
}

   // Check/uncheck the toggle and update the theme based on isDark
   initializeDarkTheme(isDark: boolean) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev: { detail: { checked: any; }; }) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd: boolean | undefined) {
    document.body.classList.toggle('dark', shouldAdd);
  }



  ionViewWillEnter(){
    this.getUser();
    this.getTodos()
  }
  getTodos(){
    this.getUser()
    this.todos = []
    let alltasks = JSON.parse(localStorage.getItem('todos')||'[]')
    for(let i of alltasks){
      if(this.user.email == i.user){
        this.todos.push(i)
      }
    }
  }
  getUser(){
    let users=JSON.parse(localStorage.getItem('users')||'[]')
    for(let i of users){
      if(i.isLogin ){
        this.user = i
      }
    }
  }
  logOutUser(){
    let users=JSON.parse(localStorage.getItem('users')||'[]')
    for(let i = 0 ; i<users.length ;i++){
      if(users[i].isLogin ){
        users[i].isLogin = false
        localStorage.setItem('users',JSON.stringify(users))
        this.router.navigate(['./auth/login'])
      }
    }
  }
  addItem(task:any){
    let allItems = JSON.parse(localStorage.getItem('todos')||'[]')
    allItems.push(task)
    localStorage.setItem('todos',JSON.stringify(allItems))
    this.getTodos();
    alert('task Added')
  }

  updateTodos(data:any)
  {
    console.log(data);
    if(data.action == 'edit'){
      
    }else{
      // this.todos.splice(data.index,1)
      let alltasks = JSON.parse(localStorage.getItem('todos')||'[]')
      for(let j =0;j< alltasks.length;j++){
        if(this.todos[data.index].Id == alltasks[j].Id){
            alltasks.splice(j,1)

          localStorage.setItem('todos',JSON.stringify(alltasks))
          this.getTodos()
        }
      }

    }
    
  }

 

}
