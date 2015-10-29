'use strict';

angular.module('unisalad')
  .controller('MainCtrl', function ($scope, localStorageService, $location) {
    $scope.pageClass = 'page-main';
    var viewHeight = $(window).height();
    var cardHeight = $('.container-university').height()
    $('.container-university').css('margin-top', Math.floor(0.5*(viewHeight-cardHeight-64)))


  	$scope.universities = ['Imperial College London', 'Nottingham University', 'Leeds University', 'Exeter University', 'Oxford University'];
  	$scope.uniSelected = function () {
  		console.log('User selected ' + $scope.university);
      	localStorageService.set('uni', $scope.university);
	};
	$scope.goToSign = function(sign) {
		localStorageService.set('sign', sign);
		//$location.path('do/login');
	}
  });