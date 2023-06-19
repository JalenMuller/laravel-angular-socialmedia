import { VerticalTabComponent } from './../vertical-tab/vertical-tab.component';
import { Component, ContentChildren, QueryList, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-tabs-container',
  templateUrl: './vertical-tabs-container.component.html',
  styleUrls: ['./vertical-tabs-container.component.css'],
})
export class VerticalTabsContainerComponent {
  @ContentChildren(VerticalTabComponent) tabs: QueryList<VerticalTabComponent> =
    new QueryList();
  @Input() classNames = '';
  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  selectTab(tab: VerticalTabComponent) {
    this.tabs?.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;

    return false;
  }
}
