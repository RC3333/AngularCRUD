import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  addEmployee = new FormGroup({
    firstName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    email:new FormControl('',[Validators.required, Validators.email])
  })

  get f(){
    return this.addEmployee.controls;
  }
  collection:any= []
  constructor(private serv : EmployeeService) { }

  ngOnInit(): void {
    this.serv.getList().subscribe((res)=> {
      this.collection = res;
    })
  }
  addEmp(){
    this.serv.addEmployee(this.addEmployee.value).subscribe((res)=>{
      console.log(res);
      alert('Employee Added !')
    })
    this.addEmployee.reset({})
    window.location.reload();

  }
  deleteEmp(id:any){
    this.collection.splice(id-1,1)
    this.serv.deleteEmployee(id).subscribe((res)=>{
      alert('Employee Deleted ! ');
      console.log(res);
    })
  }

  deleteAllEmp(){
    for(let item of this.collection){
      // console.log(item.id);
      this.serv.deleteEmployee(item.id).subscribe((res)=>{
        console.log(res);
      });

    }
    alert('All Employee Deleted');
    // this.serv.deleteAll().subscribe((res)=>{
    //   console.log(res);
    // });
     window.location.reload();
  }

  updateEmployee(id:any){
    this.serv.getCurrentEmployee(id).subscribe((res)=>{
      
    })

    }
  }


