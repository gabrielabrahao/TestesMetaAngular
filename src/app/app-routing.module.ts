import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListScheduleComponent } from './components/list-schedule/list-schedule.component';
import { ScheduleTransferComponent } from './components/schedule-transfer/schedule-transfer.component';

const routes: Routes = [
  {path:'', component: ListScheduleComponent},
  {path:'list', component: ListScheduleComponent},
  {path:'transfer', component: ScheduleTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
