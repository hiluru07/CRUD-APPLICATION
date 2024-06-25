import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datatypes } from './datatypes';
import { Observable } from 'rxjs';
import { Objt } from './add/add.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:3000/Datas"

insert(data:Objt):Observable<Objt[]>
{
  return this.http.post<Objt[]>(this.url,data)
}
view():Observable<Datatypes[]>
{
  return this.http.get<Datatypes[]>(this.url)
}
select(id:number):Observable<Datatypes>
{
  return this.http.get<Datatypes>(this.url+"/"+id)
}
update(id:number,data:Datatypes):Observable<Datatypes[]>
{
  return this.http.put<Datatypes[]>(this.url+"/"+id,data)
}
remove(id:number):Observable<Datatypes[]>
{
  return this.http.delete<Datatypes[]>(this.url+"/"+id)
}  
}
