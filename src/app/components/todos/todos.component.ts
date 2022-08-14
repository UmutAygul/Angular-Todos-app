import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todo1={userId: 1,id: 1,title: "delectus aut autem",completed: false}
  todo2=  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  }
  todo3=  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  }
  todos=[this.todo1,this.todo2,this.todo3]

  constructor() { }

  ngOnInit(): void {
  }

}
