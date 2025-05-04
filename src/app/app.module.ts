import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderAComponent } from './header-a/header-a.component';
import { Body001Component } from './body-001/body-001.component';
import { DynamicLoaderDirective } from './shared/dynamic-loader.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeaderAComponent,
    Body001Component,
    DynamicLoaderDirective // Moved here as it is standalone
  ],
  declarations: [
    // Add your components, directives, or pipes here
  ]
  // Removed bootstrap array as HeaderAComponent is standalone
})
export class AppModule { }