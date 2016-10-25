function todolistCtrl(ListService, TodoService) {
    var vm = this;

    vm.lists = ListService.getLists();
    vm.todos = TodoService.getTodos();
    // console.log(vm.todos);
    // console.log(vm.todos[vm.todos.$indexFor('list_1')]);

    vm.addList = function() {
        var new_list = {
            //TODO: add modal popup form with this bottom fields
            // id: vm.lists.length+1,
            // title: 'Main',
            // color: '#c2be7c'
        };
        // ListService.addList(new_list);

    }

    vm.addTodo = function(list_id) {
        var new_todo = {
            text: vm.new_todo[list_id],
            checked: false
        };
        TodoService.addTodo(list_id, new_todo);
        vm.new_todo[list_id] = '';
    };

    vm.toggle = [];
    vm.openNewTaskForm = function(id) {
        vm.toggle[id] = vm.toggle[id] == 'show'? '' : 'show';
    };
}

angular.module('todolistApp')
.controller('todolistCtrl', ['ListService', 'TodoService', todolistCtrl]);