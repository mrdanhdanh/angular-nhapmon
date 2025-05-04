import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Body001Component } from '../body-001/body-001.component';

@Component({
  selector: 'app-body-002',
  templateUrl: './body-002.component.html',
  styleUrls: ['./body-002.component.scss']
})
export class Body002Component {
  @ViewChild('appContain', { read: ViewContainerRef, static: false }) appContain!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadBody001() {
    alert('Loading Body001Component...'); // Hiển thị thông báo dạng popup
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Body001Component);
    alert('tới đây' + this.appContain);
    
    this.appContain.clear();
    this.appContain.createComponent(componentFactory);
  }
}
