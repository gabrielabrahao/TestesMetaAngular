export interface ScheduleTransferDto {
    originAccount?: string;
    destinationAccount: string;
    valueTransfer: number;
    tax: number;
    scheduleDate: string;
    scheduleDateCreated: string;
  }