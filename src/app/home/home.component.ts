import { Component,OnInit } from '@angular/core';
import { Datatypes } from '../datatypes';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    array:Datatypes[]=[]

    constructor(private service:ServiceService)
    {

    }

ngOnInit(): void {
  this.service.view().subscribe(data=>{
    this.array=data
  })
}

delete(id:number)
{ 
  let ch:boolean=confirm("Delete Your Data?")
  {
    if(ch==true)
      {
        alert("Your Datas has deleted..!!")
        this.service.remove(id).subscribe(data=>{
          this.array = this.array.filter(item => item.id !== id);
        })
      }
      else
      {
        alert("Your Datas Does Not Delete")
      }
  }
}
}
