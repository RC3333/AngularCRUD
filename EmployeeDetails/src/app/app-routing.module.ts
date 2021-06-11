import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

const routes: Routes = [
  {path:'', component:ListEmployeeComponent},
  {path:'empList', component:ListEmployeeComponent},
  {path:'update/:id', component:UpdateEmpComponent},
  {path:'empdetails/:id', component:EmpDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
