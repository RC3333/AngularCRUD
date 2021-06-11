import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:3000/employee"

  constructor(private http:HttpClient) { }
 getList(){
   return this.http.get(this.url)
 }

 addEmployee(data:any){
   return this.http.post(this.url,data)
 }

updateEmployee(id:any,data:any){
  return this.http.put(`${this.url}/${id}`,data)
}
 
deleteEmployee(id:any){
  return this.http.delete(`${this.url}/${id}`)
}

deleteAll(){
  return this.http.delete(this.url)
}
getCurrentEmployee(id:any){
  return this.http.get(`${this.url}/${id}`)
}

}
