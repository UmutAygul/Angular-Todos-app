import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import {HttpClient} from '@angular/common/http'
import { TodoResponseModel } from 'src/app/models/todoResponseModel';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  
  
  todos:Todo []= [];
  apiUrl="https://jsonplaceholder.typicode.com/todos"
  // todoResponseModel:TodoResponseModel={
  //   data: this.todos
  // };

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getTodos();
  }


  getTodos(){
    this.httpClient.get<TodoResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.todos=response.data
      console.log("todos:",response)
    });
  }

}
