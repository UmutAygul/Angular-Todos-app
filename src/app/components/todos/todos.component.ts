import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import {HttpClient} from '@angular/common/http'
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  
  
  todoss:Todo []= [];
  // apiUrl="https://jsonplaceholder.typicode.com/todos"


  constructor(private httpClient:HttpClient,private todoService:TodoService) { }
  // constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    this.getTodos();
  }


  getTodos(){
    this.todoService.getTodos()
    .subscribe((response)=>{
      this.todoss=response
      console.log(this.todoss)
      
    });
  }

  // getTodos(){
  //   this.httpClient.get<Todo[]>(this.apiUrl)
  //   .subscribe((response)=>{
  //     this.todoss=response
  //     console.log(this.todoss)
      
  //   });
  // }

}
