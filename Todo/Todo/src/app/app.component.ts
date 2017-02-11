import { Component, OnInit } from '@angular/core';
import { TodoItemService, ITodoItem } from './todoitem.service';
import { TodoItemForm } from './todoItemForm';
import { Subscription }   from 'rxjs/Subscription';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'todo-app',
  template: `
  
	<div style="margin:15px;">
        <tform></tform>
      </div>
      <div class='row'>
       <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class='panel-heading'>Task List</div>
        <div class='panel-body'>
          <table class='table table-condensed'>
            <thead>
              <th>Description</th>
              <th></th>
            </thead>
             <tbody>
              <tr *ngFor="let todoitem of todoitems"  >
                  <td> {{todoitem.Description}} </td>
                  <td>
					<div [(ngModel)]="todoitem.done" ngbRadioGroup name="radioBasic">
					  <label class="btn btn-primary">
						<input type="radio" value="Todo"> Todo
					  </label>
					  <label class="btn btn-primary">
						<input type="radio" [value]="false"> Done
					  </label>
					</div>
				  </td>
                </tr> 
				
            <tbody>
           </table>
           </div>
           </div>
        </div>
        `     
      })
export class AppComponent extends OnInit {
    subscription: Subscription;
    
    Refresh(){
         this._service.LoadData().then((data) => {
			this.todoitems = data;
        })
    }
    constructor(private _service: TodoItemService) {
        super();
          this.subscription = _service.RegenerateDataObs.subscribe(
          mission => {
              console.log("Good !! ", mission);
               this.Refresh();
           });
    }

    ngOnInit() {
        this.Refresh();
    }
    todoitems: ITodoItem[] = [];

     ngOnDestroy() {
    // prevent memory leak when component destroyed
       this.subscription.unsubscribe();
     }
}