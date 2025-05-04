import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicLoaderService } from '../shared/dynamic-loader.service';
import { DynamicLoaderDirective } from '../shared/dynamic-loader.directive';

@Component({
  selector: 'app-body-main',
  templateUrl: './body-main.component.html',
  styleUrls: ['./body-main.component.scss']
})
export class BodyMainComponent implements OnInit {
  @ViewChild(DynamicLoaderDirective, { static: false })
  appContainBody!: DynamicLoaderDirective;
  @ViewChild('appContainBody', { read: ViewContainerRef, static: false }) appContain!: ViewContainerRef;

  constructor(private dynamicLoaderService: DynamicLoaderService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngOnInit() {
    this.dynamicLoaderService.loadComponent$.subscribe((componentName) => {
      const component = this.getComponentByName(componentName);
      if (component) {
        // const viewContainerRef = this.appContainBody.viewContainerRef;
        // viewContainerRef.clear();
        //const componentFactory = this.appContainBody.resolveComponentFactory(component);
        //viewContainerRef.createComponent(componentFactory);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.appContain.clear();
        this.appContain.createComponent(componentFactory);
      }
    });
  }

  private getComponentByName(name: string): any {
    // Map component names to actual component classes
    const components: { [key: string]: any } = {
      'Body1': require('../body-001/body-001.component').Body001Component,
      'Body2': require('../body-002/body-002.component').Body002Component,
    };
    return components[name] || null;
  }
}