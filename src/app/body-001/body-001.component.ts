import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body-001',
  templateUrl: './body-001.component.html',
  styleUrl: './body-001.component.scss',
  imports: [
    CommonModule,
    FormsModule]
})
export class Body001Component {
  customers: string[] = ['Khách hàng 1', 'Khách hàng 2', 'Khách hàng 3'];
  selectedCustomer: string = '';
  isDropdownOpen: boolean = false;
  dateInput: string = '';

  customerDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCustomer(customer: string): void {
    this.selectedCustomer = customer;
    this.isDropdownOpen = false;
  }
  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}
