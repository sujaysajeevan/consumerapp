import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allconsumer:any=[], serchkey:string, propName:string):any[] {
    const  result:any=[]
       
      if(!allconsumer||serchkey==''|| propName==''){  ///anyone true
        return allconsumer
      }
      ////searching
      
     allconsumer.forEach((consumer:any)=>{
        if(consumer[propName].trim().toLowerCase().includes(serchkey.toLowerCase())){  ////trim for avoid white space,includes or startwith for searching
          result.push(consumer)
        }
      })
     
  
      return result;
    }
  

}
