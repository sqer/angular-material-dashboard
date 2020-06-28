import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {

  menuItems: MenuItem[] = [
    {
      icon: "insert_chart_outlined",
      label: "charts"
    },
    {
      icon: "attach_money",
      label: "money"
    },
    {
      icon: "notification_important",
      label: "notifications"
    },
    {
      icon: "settings",
      label: "settings"
    },
    {
      icon: "forum",
      label: "forum"
    },
    {
      icon: "search",
      label: "search"
    },
    {
      icon: "filter_alt",
      label: "filter"
    },
    {
      icon: "account_circle",
      label: "account"
    },
    {
      icon: "extension",
      label: "extension"
    },
    {
      icon: "shopping_cart",
      label: "cart"
    },
    {
      icon: "today",
      label: "calendar"
    },
    {
      icon: "subscriptions",
      label: "media"
    }
  ]

}
