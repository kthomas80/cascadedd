'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Customers',
    'state': 'customers'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('cascadeddApp')
  .controller('NavbarController', NavbarController);
