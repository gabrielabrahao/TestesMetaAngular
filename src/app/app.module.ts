import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListScheduleComponent } from './components/list-schedule/list-schedule.component';
import { ScheduleTransferComponent } from './components/schedule-transfer/schedule-transfer.component';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleTransferService } from './services/schedule-transfer.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListScheduleComponent,
    ScheduleTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [ScheduleTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
