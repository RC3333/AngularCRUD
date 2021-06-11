import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
id:any;
fName !:string;
lName !:string;
email !:string;
 collection:any= []

  constructor(private serv:EmployeeService, private router:ActivatedRoute,private route:Router) { }
  addEmployee = new FormGroup({
    firstName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    email:new FormControl('',[Validators.required, Validators.email])
  })
  ngOnInit(): void {
   
    this.serv.getList().subscribe((res)=> {
      this.collection = res;
      this.id=this.router.snapshot.params.id;
      for(let emp of this.collection){
        if(this.id==emp.id){
          this.fName = emp.firstName;
          this.lName = emp.lastName;
          this.email = emp.email;
        }
      this.addEmployee= new FormGroup({
        firstName: new FormControl(this.fName),
        lastName: new FormControl(this.lName),
        email: new FormControl(this.email),
       
      })
    }
    })
  
  }
  get f(){
    return this.addEmployee.controls;
  }
updateEmp(){
  this.serv.updateEmployee(this.id,this.addEmployee.value).subscribe((res)=>{
    console.log(res);
    alert('Employee Updated');
    this.route.navigate(['/empList']);
  })
}
}
