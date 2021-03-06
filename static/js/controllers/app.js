'use strict';

angular.module('unisalad')
  .controller('AppCtrl', ['$scope', '$rootScope', '$mdSidenav', '$mdMedia', '$location', 'localStorageService', 'toast', 'userData', 
                    function ($scope, $rootScope, $mdSidenav, $mdMedia, $location, localStorageService, toast, userData) {

    $scope.wideScreen = $rootScope.wideScreen;

    var headroom = new Headroom(document.getElementById("toolbar"), {
      "offset": 10,
      "tolerance": 10,
      "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
      }
    });
    headroom.init();

    var viewHeight = $(window).height();
    $('md-sidenav').css('bottom', 'auto');
    $('md-sidenav').css('height', viewHeight);
    $('div.page').css('min-height', viewHeight - 64);
    $('div.content').css('min-height', viewHeight - 64);


    $scope.toastNotification = function (message) {
      toast.displayToast(message)
    }


    $scope.loggedIn = (userData.userId != null);

    $scope.goTo = function (view) {
      if(view == '/login') {
        localStorageService.set('sign', 'in');
      };
      $location.path(view);
    }

    $scope.clickArea = function (side) {
      var bodyClass = $('body').attr('class');
      if (bodyClass.indexOf('sidebar-open') > -1) {
        $scope.toggleSidebar(side);
      }
    }

    $scope.toggleSidebar = function(side) {
      toggleSide(side)
    };

    $('.swipe-area-left').swipe({ swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
            if (phase=='move' && direction =='right') {
                 toggleSide('left');
                 return false;
            }
            if (phase=='move' && direction =='left') {
                 toggleSide('left');
                 return false;
            }
        }
    });

    $('.swipe-area-right').swipe({ swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
            if (phase=='move' && direction =='left') {
                 toggleSide('right');
                 return false;
            }
            if (phase=='move' && direction =='right') {
                 toggleSide('right');
                 return false;
            }
        }
    });

    var toggleSide = function (side) {
      $('#' + side + '-sidebar').toggleClass(side + '-sidebar-open');
      $('.swipe-area-' + side).toggleClass(side + '-sidebar-open');
      $('body').toggleClass('sidebar-open');
    }
    
  }])
