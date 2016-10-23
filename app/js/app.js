'use strict';

/* Module */
var todolistApp = angular.module('todolistApp', ['ngResource']);
todolistApp.constant('MONGOLAB_CONFIG',{API_KEY:'R5yAQrpwxPxNszWhqmMhqbqgbzAyyQUQ', DB_NAME:'todo'});

/* Lists Factory */
todolistApp.factory('Lists', [
  '$resource', function($resource) {
    return $resource('lists/:listId.:format', {
      listId: 'lists',
      format: 'json',
    }, {
      update: {method: 'PUT', params: {listId: '@list'}, isArray: true}
    });
  }
]);

/* ToDos Factory */
todolistApp.factory('ToDos', [
  '$resource', function($resource) {
    return $resource('lists/list_:listId.:format', {
      listId: '@list_id',
      format: 'json',
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

todolistApp.controller('TodoListCtrl',[
  '$scope','$document', '$location', 'Lists', 'ToDos',
  function($scope, $http, $location, Lists, ToDos) {

    // var postData = {
    //   "id": 42,
    //   "title": "The Hitchhiker's Guide to the Galaxy",
    //   "checked": false
    // }
    // ToDos.save({}, postData);

    Lists.query(function(data) {
      $scope.lists = data;
      angular.forEach(data, function(list, i) {
        $scope.lists[i].tasks = ToDos.query({listId: list.id});
      });
    });

    $scope.newTodo = {};
    $scope.addTask = function(list_id) {
      var list_tasks = $scope.lists[list_id].tasks;
      $scope.new_task = new ToDos({
        id: list_tasks.length + 1,
        text: $scope.newTodo[list_id].text,
        checked: false
      });
      list_tasks.push($scope.new_task);
      ToDos.update({listId: list_id}, list_tasks);
      $scope.newTodo[list_id].text = '';
    };

    $scope.toggle = [];
    $scope.openNewTaskForm = function(id){
      $scope.toggle[id] = $scope.toggle[id] == 'show'? '' : 'show';
    };

  }
]);