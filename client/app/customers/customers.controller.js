'use strict';

angular.module('cascadeddApp')
  .controller('CustomersCtrl', function ($scope, Customers) {
      var vm = this;

      vm.PageTitle = 'Customer/Account/Ship-Tos Cascading Drop Down demo';
      vm.PageDescription = '';

     vm.selectedCustomerItem = {};
     //Customers is returned from a service factory in ./customers.service.js
     vm.customerItems = Customers;
  });
