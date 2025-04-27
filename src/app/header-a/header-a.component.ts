import { Component,  HostListener } from '@angular/core';

@Component({
  selector: 'app-header-a',
  imports: [],
  templateUrl: './header-a.component.html',
  styleUrl: './header-a.component.scss'
})
export class HeaderAComponent {
  title = 'Header A';
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key === 'M') {
      event.preventDefault(); // Ngăn trình duyệt xử lý hotkey
      this.toggleDropdown(); // Mở dropdown menu
    }
  }
}
