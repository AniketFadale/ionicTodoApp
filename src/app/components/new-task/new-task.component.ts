import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent  implements OnInit {


  @Output() newItemEvent = new EventEmitter<any>();
  @Input() user :any

  todoName = 'Create a template';
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log()
  }
  addTask(Newtask:any){
    console.log(Newtask.value);
    let task = Newtask.value;
    task.completed = false;
    task.user = this.user.email;
    task.Id =Math.random().toString(36).substring(2)
    this.newItemEvent.emit(task);
    
    Newtask.reset()
    
  }

}
