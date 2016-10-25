function todoService($firebaseArray) {
    var todosRef = firebase.database().ref().child("todos");
    todos = {}

    todos.getTodos = function() {
        return $firebaseArray(todosRef);
    }

    todos.getTodosFromList = function(list_id) {
        // console.log($firebaseArray(todosRef.child(list_id)));
        return $firebaseArray(todosRef.child(list_id));
    }

    todos.addTodo = function(list_id, todo) {
        var list_todos = todos.getTodosFromList(list_id);
        list_todos.$loaded()
            .then(function() {
                var new_id = list_todos.length+1;
                list_todos.$ref().child('todo_'+new_id).set(todo);
            });
    }

    return todos;
}

angular.module('todolistApp')
.factory('TodoService', ['$firebaseArray', todoService]);