import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ScheduleTransferDto } from '../components/interfaces/schedule-transfer-response-dto.model'; // Crie este modelo.

@Injectable({
  providedIn: 'root'
})
export class ScheduleTransferService {
  private baseUrl = 'http://localhost:8080/schedule/transfer';

  constructor(private http: HttpClient) { }

   // Criar um novo agendamento
   createSchedule(schedule: ScheduleTransferDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, schedule);
  }

  // Obter todas as transferências agendadas com paginação
  getScheduleTransfers(page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(`${this.baseUrl}`, { params });
  }
}
