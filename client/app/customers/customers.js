'use strict';

angular.module('cascadeddApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customers', {
        url: '/customers',
        templateUrl: 'app/customers/customers.html',
        controller: 'CustomersCtrl',
        controllerAs: 'vm'
      });
  });
