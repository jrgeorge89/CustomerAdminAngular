import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<ClientFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client
  ) {
    this.clientForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      phone: [data?.phone || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      startDate: [data?.startDate || '', Validators.required],
      endDate: [data?.endDate || '', Validators.required]
    });
  }

  ngOnInit(): void {}

  generateUserName(name: string): string {
    const nameParts = name.trim().split(' ');
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1]}`.toLowerCase();
    }
    return nameParts[0].toLowerCase(); // Fallback si solo hay un nombre
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const formValues = this.clientForm.value;
      const userName = this.generateUserName(formValues.name);
      const clientData = { ...formValues, userName };

      if (this.data && this.data.id !== undefined) {
        // Editar cliente existente
        this.clientService.updateClient(this.data.id, clientData).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        // Crear nuevo cliente
        this.clientService.createClient(clientData).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
