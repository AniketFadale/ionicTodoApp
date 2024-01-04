import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent  implements OnInit {
  @Input() todos: any;
  @Input() user:any
  @Output() eve =new EventEmitter<any>;
  editIndex:any
  constructor() {
   
   
    console.log(this.todos);
    
   }

  ngOnInit() {}

  editTask(index:any){
    console.log(index);
    this.editIndex=index
    this.eve.emit({action:'edit',index:index})
  }
  deleteTask(index:any){

    this.eve.emit({action:'delete',index:index})

  }

  updateTask(index:any){
    
    let alltasks = JSON.parse(localStorage.getItem('todos')||'[]')
    for(let j = 0 ; j < alltasks.length ; j++){
      
      if(this.todos[this.editIndex].Id == alltasks[j].Id){
        console.log(this.todos[this.editIndex].Id,'from update');
        alltasks[j] = this.todos[this.editIndex]
        localStorage.setItem('todos',JSON.stringify(alltasks))
        
            this.editIndex = undefined
            alert("updated successfully")
      }
    }

  }
  cancleUpdate(){
    this.todos = JSON.parse(localStorage.getItem('todos')||'[]')
    this.editIndex = undefined
    alert("update cancelled")


  }

}
