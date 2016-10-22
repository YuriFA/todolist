'use strict';

/* Controllers */
var todolistApp = angular.module('todolistApp', ['ngResource']);

/* Factory */
todolistApp.factory('Lists', [
  '$resource', function($resource) {
    return $resource('lists/:listId.:format', {
      listId: 'lists',
      format: 'json',
    }, {
      // action: {method: <?>, params: <?>, isArray: <?>, ...}
      update: {method: 'PUT', params: {listId: '@list'}, isArray: true}
    });
    //Phone.update(params, successcb, errorcb);
  }
]);

todolistApp.controller('TodoListCtrl',[
  '$scope','$document', '$location', 'Lists',
  function($scope, $http, $location, Lists) {

    Lists.query({listId: 'lists'}, function(data) {
      $scope.lists = data;
    });

    $scope.toggle = [];
    $scope.openNewTaskForm = function(id){
      $scope.toggle[id] = $scope.toggle[id] == 'show'? '' : 'show';
    };

    $scope.addTask = function() {
    };
    //Phone.query(params, successcb, errorcb)
    //Phone.get(params, successcb, errorcb)
    //Phone.save(params, payloadData, successcb, errorcb)
    //Phone.delete(params, successcb, errorcb)
  }
]);