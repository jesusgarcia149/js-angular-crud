import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';
  msg:string = '';
  hideUpdate:boolean = true;

  employees = [];

  model:any = {};
  model2:any = {};

  addEmployee():void{
  	this.employees.push(this.model);
  	this.model = {};
  	this.msg = 'Employee added successful';
  }
  deleteEmployee(i):void{
  	this.employees.splice(i, 1);
  	this.msg = 'Employee deleted successful';
  }
  myValue;
  editEmployee(i):void{
  	this.hideUpdate = false;
  	this.model2.name = this.employees[i].name;
  	this.model2.position = this.employees[i].position;
  	this.model2.email = this.employees[i].email;
  	this.myValue = i;
  }
  updateEmployee():void{
  	let i = this.myValue;
  	for (let j = 0; j < this.employees.length; j++) {
  		if (i == j) {
  			this.hideUpdate = true;
  			this.employees[i] = this.model2;
  			this.model2 = {};
  			this.msg = 'Employee updated successful';
  		}
  	}
  }
  closeAlert():void{
  	this.msg = '';
  }

}
