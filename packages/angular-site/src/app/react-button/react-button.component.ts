import { Component, OnChanges, AfterViewInit, Input, ViewEncapsulation, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from 'evergreen-ui';

export interface ReactButtonProps {
  appearance: 'default' | 'minimal' | 'primary';
  isLoading: boolean;
  label: string;
}

const containerElementName = 'reactButtonComponent';

@Component({
  selector: 'react-button',
  template: `<span #${containerElementName}></span>`,
  styleUrls: ['./react-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReactButtonComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef;
  
  @Input() appearance: 'default' | 'minimal' | 'primary';
  @Input() isLoading: boolean;
  @Input() label: string;

  rootDomID: string;

  protected getProps(): ReactButtonProps {
    const {
      appearance,
      isLoading,
      label
    } = this;
    return {
      appearance,
      isLoading,
      label
    }
  }

  protected render() {
    console.log('rendering');
    const element = React.createElement(Button, this.getProps(), this.label);
    console.log(element);
    ReactDOM.render(element, this.containerRef.nativeElement)
  }

  ngOnChanges(): void {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

}
