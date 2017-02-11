import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoItemService {
    constructor(private _http: Http) { }
    private ServiceUrl:string = "http://todo-seb-hochart.azurewebsites.net/api/task";
	private RegenerateData = new Subject<number>();
    // Observable string streams
    RegenerateDataObs = this.RegenerateData.asObservable();
   
    AnnounceChange(mission: number) {
            
          this.RegenerateData.next(mission);
    }
    
    LoadData(): Promise<ITodoItem[]> {
        return this._http.get(this.ServiceUrl)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }    
	
	Add(model:ITodoItem) {
        let headers = new Headers({ 'Content-Type': 
        'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        delete model["id"];
        let body = JSON.stringify(model);
        return this._http.post(this.ServiceUrl, body, 
               options).toPromise().catch(this.handleErrorPromise);
    }

         

    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();
		return data || [];
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? `${error.status} - ${error.statusText}`
                        : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
export interface ITodoItem {
     id : number  ,      
     description : string,
	 dueDate : string,
	 isDone: boolean
}