import { Component, OnInit } from '@angular/core';
import { TodoItem } from './Todoitem';
import { TodoItemService, ITodoItem } from './todoitem.service';

@Component({
    moduleId: __filename,
    selector: 'tform',
    templateUrl: 'todoItemForm.component.html'    
 })

export class TodoItemForm {
    constructor(private _service: TodoItemService) {
     
    }
    model = new TodoItem(0,'', '', false);
    submitted = false;
    onSubmit() { 
        console.log("Submitted Form ! ");
        this.submitted = true; 
        this._service.Add(this.model).then(data => {
           this._service.AnnounceChange(1212);
        })
    }
    
  // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}