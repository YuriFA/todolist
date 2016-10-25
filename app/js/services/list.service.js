function listService($firebaseArray) {
    var listsRef = firebase.database().ref().child("lists");
    lists = {}

    lists.getLists = function() {
        return $firebaseArray(listsRef);
    }

    lists.addList = function(list) {
        lists.getLists().$add(list);
    }

    return lists;
}

angular.module('todolistApp')
.factory('ListService', ['$firebaseArray', listService]);