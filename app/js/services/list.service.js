function listService($firebaseArray) {
    var listsRef = firebase.database().ref().child("lists");
    lists = {}

    lists.getLists = function() {
        return $firebaseArray(listsRef);
    }

    lists.addList = function(list) {
        var all_lists = lists.getLists();
        all_lists.$loaded()
            .then(function() {
                var new_id = all_lists.length+1;
                all_lists.$ref().child('list_'+new_id).set(list);
            });
    }

    return lists;
}

angular.module('todolistApp')
.factory('ListService', ['$firebaseArray', listService]);