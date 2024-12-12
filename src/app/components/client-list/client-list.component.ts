import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { ClientFormComponent } from '../client-form/client-form.component';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  displayedColumns: string[] = ['sharedKey', 'businnessID', 'phone', 'email', 'startDate', 'endDate', 'actions'];

  constructor(private clientService: ClientService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }

  openCreateClientDialog(): void {
    const dialogRef = this.dialog.open(ClientFormComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadClients();
      }
    });
  }

  editClient(client: Client): void {
    const dialogRef = this.dialog.open(ClientFormComponent, {
      width: '300px',
      data: client
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadClients();
      }
    });
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => this.loadClients());
  }

  onSearch(criteria: any): void {
    if (criteria.basic) {
      this.clientService.searchClients(criteria.query).subscribe(clients => this.clients = clients);
    } else if (Object.keys(criteria).length > 1) {
      this.clientService.advancedSearch(criteria).subscribe(clients => this.clients = clients);
    } else {
      this.loadClients(); // Si no hay criterios, cargar todos los clientes
    }
  }

  exportToCSV(): void {
    const exportData = this.clients.map(client => ({
      sharedKey: client.userName,
      businnessID: client.name,
      phone: client.phone,
      email: client.email,
      startDate: client.startDate,
      endDate: client.endDate
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'csv', type: 'array' });

    this.saveAsExcelFile(excelBuffer, 'clients_list');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.csv';
