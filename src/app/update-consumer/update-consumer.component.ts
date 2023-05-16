import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myconsumer } from 'src/model/myconsumer';
import { myprovider } from 'src/model/myprovider';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-consumer',
  templateUrl: './update-consumer.component.html',
  styleUrls: ['./update-consumer.component.css']
})
export class UpdateConsumerComponent implements OnInit {
  consumerid: string = '';
  consumer: myconsumer = {}
  provider: myprovider[] = []
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private route: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data.Id);
      this.consumerid = data.Id

      this.api.viewconsumer(this.consumerid).subscribe((data: any) => {
        console.log(data);
        this.consumer = data

        this.api.getallprovider().subscribe((data: any) => {
          console.log(data);
          this.provider = data

        })


      })
    })
  }
  updateconsumer(){
    this.api.updateconsumer(this.consumerid,this.consumer).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
   }

}

