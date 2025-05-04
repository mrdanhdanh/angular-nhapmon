import { Directive, Input, ViewContainerRef, OnChanges, SimpleChanges, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: '[appDynamicLoader]'
})
export class DynamicLoaderDirective implements OnChanges {
  @Input('appDynamicLoader') component: any;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public componentFactoryResolver: ComponentFactoryResolver
  ) {}

  public resolveComponentFactory(component: any) {
    return this.componentFactoryResolver.resolveComponentFactory(component);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['component'] && this.component) {
      const componentFactory = this.resolveComponentFactory(this.component);
      this.viewContainerRef.clear();
      this.viewContainerRef.createComponent(componentFactory);
    }
  }
}