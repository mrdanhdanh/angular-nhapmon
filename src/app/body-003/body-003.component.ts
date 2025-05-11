import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-003',
  imports: [CommonModule],
  templateUrl: './body-003.component.html',
  styleUrl: './body-003.component.scss'
})
export class Body003Component {
  title = 'Body 003';
  content = 'This is the content of Body 003 component.';
  searchItems = [
    {
      TypeID: '01',
      ItemID: 'txtName',
      Name: 'Name'
    },
    {
      TypeID: '02',
      ItemID: 'dateOfBirth',
      Name: 'Date of Birth'
    },
    {
      TypeID: '03',
      ItemID: 'ddGender',
      Name: 'Gender'
    },
    {
      TypeID: '01',
      ItemID: 'txtBmncd',
      Name: 'Phòng ban',
      BoundaryKB: '1'
    }
  ];

  itemData = [
    { ItemID: 'ddGender', No: '001', ItemName: 'Male' },
    { ItemID: 'ddGender', No: '002', ItemName: 'Female' },
    { ItemID: 'ddGender', No: '999', ItemName:'Other' }
  ];
  
  constructor() { }

  ngOnInit() {
    console.log('Body003Component initialized');
  }

  // Add any additional methods or properties as needed
}
