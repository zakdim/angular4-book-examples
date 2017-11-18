import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input} from '@angular/core';

@Directive({
  selector: '[ccIf]'
})
export class CodeCraftIfDirective {

  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef) {
  }

  @Input() set ccIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
