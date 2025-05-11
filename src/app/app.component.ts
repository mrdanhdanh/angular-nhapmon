import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderAComponent } from './header-a/header-a.component';
import { FooterAComponent } from './footer-a/footer-a.component';
import { Body001Component } from './body-001/body-001.component';
import { Body002Component } from './body-002/body-002.component';
import { Body003Component } from './body-003/body-003.component';
import { BodyMainComponent } from "./body-main/body-main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HeaderAComponent, FooterAComponent, BodyMainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
}