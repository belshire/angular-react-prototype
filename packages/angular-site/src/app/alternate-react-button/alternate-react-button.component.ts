import { Component, OnInit, OnChanges, AfterViewInit, Input, ContentChildren } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ReactComponents from 'react-components';

export interface ReactButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

@Component({
  selector: 'alternate-react-button',
  templateUrl: './alternate-react-button.component.html',
  styleUrls: ['./alternate-react-button.component.scss']
})
export class AlternateReactButtonComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() primary: boolean;
  @Input() backgroundColor: string;
  @Input() size: 'small' | 'medium' | 'large';
  @Input() label: string;
  @Input() onClick: () => void;

  rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    if (node == null) {
      console.error('No node found');
      return;
    }
    return node;
  }

  protected getProps(): ReactButtonProps {
    const {
      primary,
      backgroundColor,
      size,
      label,
      onClick
    } = this;
    return {
      primary,
      backgroundColor,
      size,
      label,
      onClick
    }
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      console.log('rendering');
      console.log('ReactComponents: ', ReactComponents);
      console.log('Button: ', ReactComponents.Button);
      const element = React.createElement(ReactComponents.Button, this.getProps());
      console.log(element);
      ReactDOM.render(element, this.getRootDomNode())
    }
  }

  ngOnInit(): void {
    console.log(this);
    this.rootDomID = 'button'
  }

  ngOnChanges(): void {
    console.log('changes');
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
  }

}
