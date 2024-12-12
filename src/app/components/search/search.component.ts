import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userName: string = '';
  showAdvancedSearch: boolean = false;
  searchForm: FormGroup = this.fb.group({
    userName: [''],
    name: [''],
    phone: [''],
    email: [''],
    startDate: [''],
    endDate: ['']
  });

  constructor(private fb: FormBuilder) {}

  @Output() search = new EventEmitter<any>();

  ngOnInit(): void {}

  basicSearch(): void {
    this.search.emit({ basic: true, query: this.userName });
  }

  toggleAdvancedSearch(): void {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  advancedSearch(): void {
    const formValues = this.searchForm.value;
    const params = {
      userName: formValues.userName,
      name: formValues.name,
      phone: formValues.phone,
      email: formValues.email,
      startDate: formValues.startDate ? formatDate(formValues.startDate, 'yyyy-MM-dd', 'en-US') : '',
      endDate: formValues.endDate ? formatDate(formValues.endDate, 'yyyy-MM-dd', 'en-US') : ''
    };
    this.search.emit({ basic: false, ...params });
  }

  clearSearch(): void {
    this.userName = ''; // Se limpia el campo de búsqueda básica
    this.searchForm.reset({
      userName: '',
      name: '',
      phone: '',
      email: '',
      startDate: '',
      endDate: ''
    });
    this.search.emit({ basic: false }); // Evento para mostrar todos los registros
  }
}
