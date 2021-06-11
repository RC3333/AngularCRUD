import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private serv: EmployeeService) { }
  addEmployee = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl('')
  })
  ngOnInit(): void {
  }
  addEmp(){
    this.serv.addEmployee(this.addEmployee.value).subscribe((res)=>{
      console.log(res);
      alert('Employee Added !')
    })
    this.addEmployee.reset({})
  }

}
