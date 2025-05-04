import { Component,  HostListener  } from '@angular/core';
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
  customersInfo: { ID: string; KB: string; NAME: string; BMNCD: string; SOUCD: string }[] = [
    { ID: 'TOKCD-001', KB: '1', NAME: 'Khách hàng 1', BMNCD: 'BM001', SOUCD: 'SC001' },
    { ID: 'TOKCD-002', KB: '9', NAME: 'Khách hàng 2', BMNCD: 'BM002', SOUCD: 'SC002' },
    { ID: 'TOKCD-003', KB: '1', NAME: 'Khách hàng 3', BMNCD: 'BM003', SOUCD: 'SC003' },
    { ID: 'TOKCD-004', KB: '9', NAME: 'Khách hàng 4', BMNCD: 'BM003', SOUCD: 'SC003' },
    { ID: 'TOKCD-005', KB: '1', NAME: 'Khách hàng 5', BMNCD: 'BM003', SOUCD: 'SC001' },
    { ID: 'TOKCD-006', KB: '1', NAME: 'Khách hàng 6', BMNCD: 'BM001', SOUCD: 'SC002' },
    { ID: 'TOKCD-007', KB: '1', NAME: 'Khách hàng 7', BMNCD: 'BM003', SOUCD: 'SC003' },
    { ID: 'TOKCD-008', KB: '9', NAME: 'Khách hàng 8', BMNCD: 'BM002', SOUCD: 'SC001' },
    { ID: 'TOKCD-009', KB: '1', NAME: 'Khách hàng 9', BMNCD: 'BM001', SOUCD: 'SC003' },
    { ID: 'TOKCD-101', KB: '1', NAME: 'Khách hàng 10', BMNCD: 'BM001', SOUCD: 'SC002' },
    { ID: 'TOKCD-102', KB: '9', NAME: 'Khách hàng 11', BMNCD: 'BM002', SOUCD: 'SC001' },
    { ID: 'TOKCD-103', KB: '1', NAME: 'Khách hàng 12', BMNCD: 'BM003', SOUCD: 'SC002' }
  ];
  customers: string[] = [];
  selectedCustomer: string = '';
  isCusDownOpen: boolean = false;
  dateInput: string = '';

  customerDropdown(): void {
    // Lọc các ID có KB = 1
    this.customers = this.customersInfo
    .filter(customer => customer.KB === '1') // Lọc các khách hàng có KB = 1
    .sort((a, b) => b.ID.localeCompare(a.ID)) // Sắp xếp giảm dần theo ID
    .map(customer => customer.ID); // Lấy danh sách ID

    // Hiển thị dropdown
    this.isCusDownOpen = !this.isCusDownOpen;

    // Cuộn đến phần tử có ID = selectedCustomer
    setTimeout(() => {
      const selectedElement = document.querySelector(`.cus-id-drop li.highlight`);
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }, 0);
  }
  selectCustomer(customer: string): void {
    this.selectedCustomer = customer;
    this.isCusDownOpen = false;
    this.checkCustomer();
  }
  checkCustomer(): void {
    const customer = this.customersInfo.find(c => c.ID === this.selectedCustomer);
    const customerStatusElement = document.getElementById('customer-status');
    if (this.selectedCustomer.trim() === '') {
      // Nếu blank thì không check
      if (customerStatusElement) {
        this.status_change(customerStatusElement, 'None', 'grey'); // Đặt màu chữ xám
      }
    } else {
      // Nếu khác blank thì mới check
      if (customer) {
        if (customer.KB === '9') {
          if (customerStatusElement) {
            this.status_change(customerStatusElement, 'Khách hàng đã bị xoá', 'brown'); // Đặt màu chữ nâu
          }
        } else {
          if (customerStatusElement) {
            this.status_change(customerStatusElement, 'Khách hàng hợp lệ', 'blue'); // Đặt màu chữ xanh
          }
        }
        
      } else {
        if (customerStatusElement) {
          this.status_change(customerStatusElement, 'Khách hàng không tồn tại', 'red'); // Đặt màu chữ đỏ
        }
      }
    }
  }
  status_change(cusElement: HTMLElement, txtchange: string, clschange: string):void {
    if (cusElement) {
      cusElement.textContent = txtchange;
      cusElement.style.color = clschange; // Đặt màu chữ xanh
    }
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.btn-chev')) {
      this.isCusDownOpen = false;
    }
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}

