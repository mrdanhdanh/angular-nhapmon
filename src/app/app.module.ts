import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderAComponent } from './header-a/header-a.component';
import { Body001Component } from './body-001/body-001.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HeaderAComponent,
    Body001Component
  ],
  declarations: [
    // Add your components, directives, or pipes here
  ]
  // Removed bootstrap array as HeaderAComponent is standalone
})
export class AppModule { }