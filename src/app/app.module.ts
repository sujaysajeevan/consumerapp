import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateConsumerComponent } from './update-consumer/update-consumer.component';
import { ViewConsumerComponent } from './view-consumer/view-consumer.component';
import { NewConsumerComponent } from './new-consumer/new-consumer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ConsumerManagementComponent } from './consumer-management/consumer-management.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpdateConsumerComponent,
    ViewConsumerComponent,
    NewConsumerComponent,
    NavbarComponent,
    PagenotfoundComponent,
    ConsumerManagementComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ////import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
