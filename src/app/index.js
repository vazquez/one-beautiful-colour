'use strict';

import MainCtrl from './main/main.controller';
import MainGuideCtrl from './main-guide/main-guide.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';

angular.module('oneBeautifulColour', ['ui.router'])
  .controller('MainCtrl', MainCtrl)
  .controller('MainGuideCtrl', MainGuideCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('guide', {
        url: '/guide',
        templateUrl: 'app/main-guide/main-guide.html',
        controller: 'MainGuideCtrl'
      });

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  })
;
