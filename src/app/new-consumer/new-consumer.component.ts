import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { myconsumer } from 'src/model/myconsumer';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css']
})
export class NewConsumerComponent implements OnInit {
  // consumerid:any;
  //  consumername:string='';
  allprovider:any[]=[];
 
  consumer:myconsumer={}



  constructor(private api:ApiService,private route:Router) { }
  ngOnInit(): void {
    this.api.getallprovider().subscribe((data:any)=>{
   console.log(data);
   this.allprovider=data
   
 })

}
addconsumer(){
  this.api.addconsumer(this.consumer).subscribe(
    (data:any)=>{
      this.route.navigateByUrl('')
    }
  )
}


}


