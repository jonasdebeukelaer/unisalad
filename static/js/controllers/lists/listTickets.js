'use strict';

angular.module('unisalad')
  .controller('ListTicketsCtrl', ['$q', '$scope', 'searchText', 'filterFilter', 'currentList', '$location', 'listFunctions', 
                                function ($q, $scope, searchText, filterFilter, currentList, $location, listFunctions) {
    $scope.pageClass = 'page-tickets';

    $scope.searchText = searchText;
    $scope.sortModes = [{
        label: 'Date added',
        code: 'postDate',
    },
    { 
        label:'Price',
        code: 'cost'
    },
    {
        label: 'Date of event',
        code: 'eventDate'
    }];
    $scope.sortBy = 'postDate';


    function getLists () {
      listFunctions.loadPosts('tickets', function(data) {
        $scope.posts = data;
      });
    }

    getLists();

    $scope.hideAddpostButton = function () {
      listFunctions.hideAddpostButton;
    }

    ;( function( $ ) { $( '.swipebox' ).swipebox(); } )( jQuery );

    $scope.openPostDetails = function ($event, clickedPost) {
      listFunctions.postTapped($event, clickedPost);
    }
  }]);