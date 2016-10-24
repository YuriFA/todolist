'use strict';

/* Module */
var todolistApp = angular.module('todolistApp', ['ngResource, firebase']);
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
  '$scope','$firebase', '$location', 'Lists', 'ToDos',
  function($scope, $firebase, $location, Lists, ToDos) {

    // var ref = new Firebase("https://todolist-15ec6.firebaseapp.com/");
    // // create an AngularFire reference to the data
    // var sync = $firebase(ref);

    // // download the data into a local object
    // var syncObject = sync.$asObject();

    // // synchronize the object with a three-way data binding
    // // click on `index.html` above to see it used in the DOM!
    // syncObject.$bindTo($scope, "data");

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