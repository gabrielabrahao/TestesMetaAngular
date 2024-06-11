import { Component, OnInit } from '@angular/core';
import { ScheduleTransferDto } from '../interfaces/schedule-transfer-response-dto.model';
import { ScheduleTransferService } from 'src/app/services/schedule-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.css']
})
export class ListScheduleComponent implements OnInit {
  scheduleTransfers: ScheduleTransferDto[] = [];
  currentPage = 0;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;

  constructor(private router: Router,private scheduleTransferService: ScheduleTransferService) { }

  ngOnInit(): void {
    this.loadScheduleTransfers();
  }

  loadScheduleTransfers() {
    this.scheduleTransferService.getScheduleTransfers(this.currentPage, this.pageSize).subscribe(
      (data: any) => {
        this.scheduleTransfers = data.content || [];
        this.totalItems = data.totalElements || 0;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      },
      error => {
        console.error('Error loading schedule transfers:', error);
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadScheduleTransfers();
  }

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  createSchedule() {
    this.router.navigate(['/transfer']); // Redireciona para a rota /transfer
  }
  
}