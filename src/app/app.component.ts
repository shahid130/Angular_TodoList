import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList: Todo[]=[];
  todo:Todo = {
    Title:'',
    Id:null
  };

  addItem() : void {
    
    if(!this.todo.Id)
    {
      this.todo.Id = this.todoList.length +1;
      this.todoList.push({...this.todo});
    }
    else
    {
      this.todoList = this.todoList.map(o=> {

        if(o.Id==this.todo.Id)
        {
          o.Title=this.todo.Title;
        }
        return o;
      })
    }
    this.todo=
    {
      Title:"",
      Id:null
    }

    console.log(this.todo);
  }

  editItem(todo:Todo) : void {
    this.todo = {...todo};
    console.log(this.todo);
  }

  deleteItem(id:number) : void {
    this.todoList = this.todoList.filter(o=>o.Id!=id);
    console.log(this.todo);
  }

  title = 'TodoList';
}
