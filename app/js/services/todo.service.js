function todoService($firebaseArray) {
    var todosRef = firebase.database().ref().child("todos");
    todos = {}

    todos.getTodos = function() {
        return $firebaseArray(todosRef);
    }

    todos.addTodo = function(todo) {
        todos.getTodos().$add(todo);
    }

    return todos;
}

angular.module('todolistApp')
.factory('TodoService', ['$firebaseArray', todoService]);