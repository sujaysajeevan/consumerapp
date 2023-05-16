import { Component,OnInit } from '@angular/core';
import { myconsumer } from 'src/model/myconsumer';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-consumer-management',
  templateUrl: './consumer-management.component.html',
  styleUrls: ['./consumer-management.component.css']
})
export class ConsumerManagementComponent implements OnInit {
  logindate:any;
  searchkey:string='';

  constructor(private api:ApiService) {
    this.logindate=new Date()
   }
  //  allconsumer:any;
  allconsumer:myconsumer[]=[]

  ngOnInit(): void {  //data prints when loadig
   this.getallconsumer()

  }
  getallconsumer(){
    this.api.getallconsumer().subscribe((data:any)=>{
      console.log(data);//array of data in console log
      this.allconsumer=data
    })
  }
  
//  namechange(){
//    alert("value changed")
//   }
search(event:any){
  console.log(event.target.value);
  this.searchkey=event.target.value
  console.log(this.searchkey);
  
}
deletecontact(consumerId:any){
  this.api.deletecontact(consumerId).subscribe((data:any)=>{
    alert('contact deleted')
     this. getallconsumer()
    
  })
}
}
