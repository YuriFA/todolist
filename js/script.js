$(document).ready(function(){
    $('#check_all_tasks').on('click', function(e){
        var checks = $(this).parents('.todo').find('ul.todo_list .custom_checkbox');
        checks.each(function(){
            if(!$(this).is(':checked')) {
                $(this).trigger('click');
            }
        });
    });
});