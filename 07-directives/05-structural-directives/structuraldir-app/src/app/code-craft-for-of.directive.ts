import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input} from '@angular/core';

@Directive({
  selector: '[ccFor]'
})
export class CodeCraftForOfDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }
  @Input() set ccForOf(collection: boolean) {
    if (collection) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
