import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerManagementComponent } from './consumer-management/consumer-management.component';
import { NewConsumerComponent } from './new-consumer/new-consumer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateConsumerComponent } from './update-consumer/update-consumer.component';
import { ViewConsumerComponent } from './view-consumer/view-consumer.component';

const routes: Routes = [
  {
    path:'',redirectTo:'consumer/admin',pathMatch:'full'    ////default http://localhost:4200
  },
  {
    path:'consumer/admin',component:ConsumerManagementComponent   ////http://localhost:4200/consumer/admin
  },
  {
    path:'consumer/new',component:NewConsumerComponent   ////http://localhost:4200/consumer/new
  },
  {
    path:'consumer/update/:Id',component:UpdateConsumerComponent   ////http://localhost:4200/consumer/update
  },
  {
    path:'consumer/view/:consumerId',component:ViewConsumerComponent   ////http://localhost:4200/consumer/view
  },
  {
    path:'**',component:PagenotfoundComponent   ////http://localhost:4200/ for page not found
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
