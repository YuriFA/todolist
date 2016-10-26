function todolistCtrl(ListService, TodoService, ngDialog) {
    var vm = this;

    vm.lists = ListService.getLists();
    vm.todos = TodoService.getTodos();

    vm.openNewListPopup = function () {
        ngDialog.open({
            template: 'templates/popupTmpl.html',
            className: 'ngdialog-theme-default'
        });
    };
    vm.addList = function() {
        if(vm.new_list.title.length > 0) {
            ListService.addList(vm.new_list);
            vm.new_list = {};
        }
    }

    vm.addTodo = function(list_id, toggleIndex=false) {
        if(vm.new_todo[list_id]) {
            var new_todo = {
                text: vm.new_todo[list_id],
                checked: false
            };
            var id = vm.todos.length+1;
            TodoService.addTodo(list_id, new_todo, id);
            vm.new_todo[list_id] = '';
        }
        if(toggleIndex) {
            vm.openNewTaskForm(toggleIndex);
        }
    };

    vm.updateTodo = function(list_id, todo_id, todo) {
        TodoService.updateTodo(list_id, todo_id, todo);
    }

    vm.toggle = [];
    vm.openNewTaskForm = function(id) {
        vm.toggle[id] = vm.toggle[id] == 'show'? '' : 'show';
    };
}

angular.module('todolistApp')
.controller('todolistCtrl', ['ListService', 'TodoService', 'ngDialog', todolistCtrl]);