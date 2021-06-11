import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private serv:EmployeeService, private router:ActivatedRoute) { }

fName !:string;
lName !:string;
email !:string;
id:any;

  collection:any= []

  ngOnInit(): void {
    this.serv.getList().subscribe((res)=> {
      this.collection = res;
      this.id=this.router.snapshot.params.id;
    // console.warn(this.router.snapshot.params.id)
    for(let emp of this.collection){
        if(this.id==emp.id){
          this.fName = emp.firstName;
          this.lName = emp.lastName;
          this.email = emp.email;
        }
    }
    // this.serv.getCurrentEmployee(this.router.snapshot.params.id).subscribe((result)=>{
    //   console.log(result);
     
     
    })
  }

}
