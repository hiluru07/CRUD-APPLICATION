import { Component } from '@angular/core';
import { Datatypes } from '../datatypes';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

    gender:string[]=["","Male","Female"]

    objt:Objt={"name":"","age":0,"gender":this.gender[0],"mail":"","phone":0,"city":""}

    constructor(private service:ServiceService, private nav:Router){}

  submit()
  {
    this.service.insert(this.objt).subscribe(dt=>{
    this.nav.navigate(["home"])
    })
  }  
}

export class Objt{
  constructor(public name:string, public age:number, public gender:string, public mail:string, public phone:number, public city:string){}
}

