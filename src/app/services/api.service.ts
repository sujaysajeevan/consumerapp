import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myconsumer } from 'src/model/myconsumer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

baseurl:string='http://localhost:3000/consumers'

  getallconsumer():Observable<myconsumer>{
  return this.http.get(this.baseurl)

  }
  viewconsumer(consumerId:any){
    return this.http.get(`${this.baseurl}/${consumerId}`)
  }

   //api call for fetch group name
   getprovidername(providerId:any){
    return this.http.get('http://localhost:3000/provider/'+providerId)
   }

   getallprovider(){
    return this.http.get('http://localhost:3000/provider')
  }
    //function add new contact to server
    addconsumer(consumerBody:any){
      return this.http.post(this.baseurl,consumerBody)

    }
      //function for delete a contact from server
      deletecontact(consumerId:any){
        return this.http.delete(`${this.baseurl}/${consumerId}`)

      }

      updateconsumer(consumerid:any,consumerBody:any){
        return this.http.put(`${this.baseurl}/${consumerid}`,consumerBody)
       }
}
