function todolistCtrl(ListService, TodoService) {
    var vm = this;

    vm.lists = ListService.getLists();
    // vm.lists.$loaded()
    //     .then(function() {
    //         angular.forEach(vm.lists, function(list, i) {
    //             vm.lists[i].todos = TodoService.getTodos()
    //         });
    //     });


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
            list_id: list_id,
            text: vm.new_todo[list_id],
            checked: false
        };
        TodoService.addTodo(new_todo);
        vm.new_todo[list_id] = '';
    };

    vm.toggle = [];
    vm.openNewTaskForm = function(id) {
        vm.toggle[id] = vm.toggle[id] == 'show'? '' : 'show';
    };
}

angular.module('todolistApp')
.controller('todolistCtrl', ['ListService', 'TodoService', todolistCtrl]);