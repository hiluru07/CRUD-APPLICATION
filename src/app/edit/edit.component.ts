import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Datatypes } from '../datatypes';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
    
   constructor(private service:ServiceService, public nav:Router, private activerout:ActivatedRoute){}

    gender:string[]=["","Male","Female"]

    Obj:Datatypes={"id":0,"name":"","age":0,"gender":this.gender[0],"mail":"","phone":0,"city":""}

ngOnInit(): void {
  let id:number=this.activerout.snapshot.params["id"]
  this.service.select(id).subscribe(data=>{
    this.Obj=data
  })
}

submit()
{
  this.service.update(this.Obj.id,this.Obj).subscribe(data=>{
    this.nav.navigate(["home"])
  })
}
}
