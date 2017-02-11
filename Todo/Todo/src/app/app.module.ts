import { NgModule }      from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodoItemService } from './todoitem.service';
import { TodoItemForm } from './todoItemForm';


@NgModule({
  imports:      [ 
					BrowserModule,
                  FormsModule,
                  HttpModule,
				  NgbModule.forRoot()
				  ],
  declarations: [ AppComponent, TodoItemForm ],
  providers: [
        TodoItemService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
