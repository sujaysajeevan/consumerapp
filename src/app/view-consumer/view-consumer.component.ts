import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-consumer',
  templateUrl: './view-consumer.component.html',
  styleUrls: ['./view-consumer.component.css']
})
export class ViewConsumerComponent implements OnInit {
  consumerId:string='';
  consumer:any;
  providerId:any;
  providername:any;

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) { }

ngOnInit(): void {

  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data);
    this.consumerId=data.consumerId//3
    
this.api.viewconsumer(this.consumerId).subscribe((data:any)=>{
  console.log(data);
  this.consumer=data
  this.providerId=data.provider

this.api.getprovidername(this.providerId).subscribe((data:any)=>{
  console.log(data);
  
  this.providername=data.name
  console.log(this.providername);
  
})
  
})

  })

  }

}
