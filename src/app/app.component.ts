import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-admin';
  shouldBeInert = false;  // Initially not inert

  constructor(private dialog: MatDialog, private clientService: ClientService) {}

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

  onSearch(criteria: any): void {
    // Lógica para manejar la búsqueda
    if (criteria.basic) {
      this.clientService.searchClients(criteria.query).subscribe(clients => {
        // // Se Actualiza la lista de clientes
      });
    } else {
      this.clientService.advancedSearch(criteria).subscribe(clients => {
        // // Se Actualiza la lista de clientes
      });
    }
  }

  loadClients(): void {
    // Lógica para cargar la lista de clientes
    this.clientService.getClients().subscribe(clients => {
      // Se Actualiza la lista de clientes
    });
  }
}
