import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleTransferService } from 'src/app/services/schedule-transfer.service';
import { ScheduleTransferDto } from '../interfaces/schedule-transfer-response-dto.model';

@Component({
  selector: 'app-schedule-transfer',
  templateUrl: './schedule-transfer.component.html',
  styleUrls: ['./schedule-transfer.component.css']
})
export class ScheduleTransferComponent implements OnInit {
  schedule: ScheduleTransferDto = {
    originAccount: '',
    destinationAccount: '',
    valueTransfer: 0,
    tax: 0,
    scheduleDate: '',
    scheduleDateCreated: ''
  };
  errorMessage: string = '';


  constructor(private router: Router, private scheduleTransferService: ScheduleTransferService) { }

  ngOnInit(): void {
  }

  submitSchedule() {
    this.errorMessage = ''; // Limpa a mensagem de erro
     this.schedule.scheduleDate = this.formatDate(this.schedule.scheduleDate);

    this.scheduleTransferService.createSchedule(this.schedule).subscribe(
      () => {
        console.log('Schedule created successfully!');
        alert('Schedule created successfully!');
        this.router.navigate(['/list']); // Redirecionar de volta para a lista após criar o agendamento
      },
      error => {
        console.error('Error creating schedule:', error.error.message);
        this.errorMessage = 'Error creating schedule: ' + error.error.message; // Define a mensagem de erro
        alert(this.errorMessage);

      }
    );
  }

   // Método para formatar a data para o formato esperado
   private formatDate(date: string): string {
    const newDate = new Date(date);
    // Formata a data para o formato 'yyyy-MM-dd HH:mm:ss'
    const formattedDate = newDate.toISOString().slice(0, 19).replace('T', ' ');
    return formattedDate;
  }
}
